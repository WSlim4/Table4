<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Conta;
use App\Pessoa;

class ContaController extends Controller
{
    public function create($id){
        $pessoa = Pessoa::find($id);
        $conta = [];
        
        if($pessoa){
            $pedidos = $pessoa->pedidos;

            foreach($pedidos as $pedido){
                array_push($conta,($pedido->quantidade*$pedido->preco));
                
            }
        } 
        
        return response()->success(array_sum($conta));
    }
}
