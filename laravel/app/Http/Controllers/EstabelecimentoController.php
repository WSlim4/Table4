<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Estabelecimento;

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

}
