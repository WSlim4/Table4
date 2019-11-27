<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Estabelecimento;
use Illuminate\Support\Facades\Storage;

class EstabelecimentoController extends Controller
{
    public function createEstabelecimento(Request $request){

        $estabelecimento = new Estabelecimento;
        $estabelecimento->createEstabelecimento($request);

        return response()->success($estabelecimento);
    }

    public function updateEstabelecimento(Request $request, $id){

        $estabelecimento = Estabelecimento::find($id);

        if($estabelecimento){
            $estabelecimento->updateEstabelecimento($request);
            return response()->success($estabelecimento);
        } else{
            $data = "Estabelecimento não encontrado";
            return response()->error($data, 400);
        }
    }

    public function deleteEstabelecimento($id){

        Estabelecimento::destroy($id);
        return response()->json(['Estabelecimento deletado com sucesso!']);
    }

    public function listEstabelecimentos(){

        return Estabelecimento::all();
    }

    public function showEstabelecimento($id){
        $estabelecimento = Estabelecimento::find($id);

        if($estabelecimento){
            return response()->success($estabelecimento);
        } else{
            $data = "Estabelecimento não encontrado";
            return response()->error($data, 400);
        }
    }

    //Calcula distância entre duas latitudes/longitudes
    public function distance($lat1,$lon1,$lat2,$lon2) {

        $r = 6371; // km (change this constant to get miles)

        $dLat = ($lat2-$lat1)*pi()/180;
        $dLon = ($lon2-$lon1)*pi()/180;
        $a = sin($dLat/2)*sin($dLat/2) +
        cos($lat1*pi()/180)*cos($lat2*pi()/180)*sin($dLon/2)*sin($dLon/2);

        $c = 2 * atan2(sqrt($a), sqrt(1-$a));

        $d = $r * $c;

        return $d;

    }

        // Calcula os Estabelecimentos próximos
        public function estabelecimentosProximos(Request $request) {

            $proximos = [];

            $estabelecimentos = Estabelecimento::paginate(10);

            foreach($estabelecimentos as $estabelecimento){

                $dist = $this->distance($request->user_latitude, $request->user_longitude, $estabelecimento->address_latitude, $estabelecimento->address_longitude);

                array_push( $proximos, ["estabelecimento" => $estabelecimento, "distance" => $dist] );

            }

            usort($proximos, function($a, $b) {
                return $a['distance'] <=> $b['distance'];
            });

            // $proximos = collect($proximos)->sortBy('distance')->toArray();
            
            return response()->success( $proximos );

        }

        public function fotoEstabelecimento(Request $request, $est_id){
            $estabelecimento = Estabelecimento::find($est_id);
            
            if (!Storage::exists('localPhotos/')){
			    Storage::makeDirectory('localPhotos/', 0775, true);
            }
            $file = $request->file('photo');
            $path = $file->store('localPhotos');
            $estabelecimento->photo = $path;

            $estabelecimento->save();
            
            return response()->json([$estabelecimento->photo]);

        }

        public function getFoto($est_id){
            $estabelecimento = Estabelecimento::find($est_id);
            return response()->download(storage_path('../localPhotos' .$estabelecimento->photo));
        }

}
