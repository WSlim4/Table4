<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mesa;
use App\Pessoa;

class MesaController extends Controller
{
    public function create(Request $request){
        
        $mesa = new Mesa;
        $mesa->createMesa($request);
   
        return response()->success($mesa);
    }
    public function listaPedidos($id){
        
        $mesa = Mesa::find($id);
        $pessoas = $mesa->pessoas;
        $pedidos = [];

        foreach($pessoas as $pessoa){
            array_push($pedidos,$pessoa->pedidos);
        }
        return $pedidos;
    }
}