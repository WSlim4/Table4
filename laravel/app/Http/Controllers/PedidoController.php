<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pedido;
use App\Pessoa;

class PedidoController extends Controller
{

    public function createPedido(Request $request){

        $pedido = new Pedido;

        $pedido->nome = $request->nome;
        $pedido->quantidade = $request->quantidade;
        $pedido->pessoa_id = $request->pessoa_id;
        $pedido->preco = $request->preco;
        $pedido->pessoa_id = $request->pessoa_id;
        $pedido->save();

        return response()->success($pedido);

    }

    public function updatePedido(Request $request, $id){

        $pedido = Pedido::findOrFail($id);

        if ($request->nome)
            $pedido->nome = $request->nome;
        if ($request->quantidade)
            $pedido->quantidade = $request->quantidade;
        if ($request->preco)
            $pedido->preco = $request->preco;
        if ($request->pessoa_id)
            $pedido->pessoa_id = $request->pessoa_id;
        $pedido->save();

        return response()->success($pedido);
    }

    public function deletePedido($id){
        Pedido::destroy($id);
        return response()->json(['Pedido excluído']);
    }

    public function listPedido(){
        return Pedido::all();

    }
    public function showPedido(Request $request, $id){
        return Pedido::where('pessoa_id', $id)->get();
        
    }
}
