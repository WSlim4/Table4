<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pedido;
use App\Pessoa;

class PedidoController extends Controller
{

    public function create(Request $request){
        
        $pedido = new Pedido;
        $pedido->createPedido($request);

        return response()->success($pedido);

    }

    public function update(Request $request, $id){

        $pedido = Pedido::findOrFail($id);
        $pedido->updatePedido($request);

        return response()->success($pedido);
    }

    public function delete($id){
        Pedido::destroy($id);
        return response()->json(['Pedido excluido']);
    }

    public function list(){
        return Pedido::all();

    }
    public function show(Request $pessoa_id){
        $pessoa = Pessoa::find($pessoa_id);
        return $pessoa->pedidos;
        
    }
    public function fazPedido($pedido_id,$pessoa_id){
        $pessoa = Pessoa::find($pessoa_id);
        $pessoa->attachPedido($pedido_id);

        return response()->json(['Pedido feito com sucesso']);
    }
}
