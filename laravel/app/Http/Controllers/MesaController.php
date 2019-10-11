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
    public function contaTotal($mesa_id){
        $mesa = Mesa::find($mesa_id);
        $pessoas = $mesa->pessoas;
        $valores = [];

        foreach($pessoas as $pessoa){
                array_push($valores, $pessoa->valorConta);
        }

        $valorTotal = array_sum($valores);
        $mesa->contaTotal($valorTotal);
        
        return response()->success($mesa->valorTotal);
    }
}