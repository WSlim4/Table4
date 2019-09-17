<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pedido;
use App\Pessoa;

class PedidoController extends Controller
{

    public function createPedido(Request $request){
        
        $pedido = new Pedido;
        $pedido->createPedido($request);

        return response()->success($pedido);

    }

    public function updatePedido(Request $request, $id){

        $pedido = Pedido::find($id);
        
        if($pedido){
            $pedido->updatePedido($request);
            return response()->success($pedido);
        } else{
            $data = "Pedido não encontrado";
            return response()->error($data, 400);
        }

        
    }

    public function deletePedido($id){
        Pedido::destroy($id);
        return response()->json(['Pedido excluido']);
    }

    public function listPedidos(){
        return Pedido::all();

    }
    public function showPedido(Request $pessoa_id){
        $pessoa = Pessoa::find($pessoa_id);
        
        if($pessoa){
            return $pessoa->pedidos;
        } else{
            $data = "Pessoa não encontrada";
            return response()->error($data, 400);
        }
        
    }
    public function fazPedido($pedido_id,$pessoa_id){
        $pessoa = Pessoa::find($pessoa_id);
        $pessoa->attachPedido($pedido_id);

        return response()->json(['Pedido feito com sucesso']);
    }
}
