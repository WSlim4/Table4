<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Conta;
use App\Pessoa;

class ContaController extends Controller
{
    public function create(Request $request, $id){
        $pessoa = Pessoa::find($id);
        $c = $pessoa->conta;
        $itens = [];
        
        if($pessoa){
            $pedidos = $pessoa->pedidos;

            foreach($pedidos as $pedido){
                array_push($itens,($pedido->quantidade*$pedido->preco));
                
            }
        }
        $valor = array_sum($itens);
        

        if($c){
            Conta::destroy($c->id);
            $conta = new Conta;
            $conta->pessoa_id = $pessoa->id;
            $conta->valor = $valor;
            $conta->save();
        } else{
            $conta = new Conta;
            $conta->pessoa_id = $pessoa->id;
            $conta->valor = $valor;
            $conta->save();
        }
        return response()->success($conta);
    }
}
