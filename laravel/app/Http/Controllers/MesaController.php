<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mesa;
use App\Pessoa;

class MesaController extends Controller
{
    public function createMesa(Request $request){

        $mesa = new Mesa;
        $mesa->createMesa($request);

        return response()->success($mesa);
    }
    public function pedidosMesa($mesa_id){
        $mesa = Mesa::find($mesa_id);
        return $mesa->pedidos;
    }

    public function pessoasMesa($mesa_id){
        $mesa = Mesa::find($mesa_id);
        return $mesa->pessoas;
    }


    public function pessoasMesaComPedidos($mesa_id){
        $mesa = Mesa::find($mesa_id);

        $pessoas = collect([]);
        foreach($mesa->pessoas as $pessoa){
            $pessoas[] = Pessoa::with('pedidos')->find($pessoa->id);
        }

        return $pessoas;
    }


    public function contaTotal($mesa_id){
        $mesa = Mesa::find($mesa_id);
        $mesa->contaTotal($mesa);

        return response()->success($mesa->valorTotal);
    }
}
