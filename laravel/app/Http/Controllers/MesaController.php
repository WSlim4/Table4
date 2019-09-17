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
    public function listaPedidos($id){
        /*Função que lista todos os pedidos de uma mesa 
            entrada->id da mesa
            saída->array de pedidos*/
        
        $mesa = Mesa::find($id);
        
        if($mesa){
            $pessoas = $mesa->pessoas;
            $pedidos = [];

            foreach($pessoas as $pessoa){
            array_push($pedidos,$pessoa->pedidos);
            }
            return $pedidos;
        } else{
            $data = "Mesa não encontrada";
            return response()->error($data, 400);
        }
    }
}