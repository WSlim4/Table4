<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pedido;
use App\Pessoa;

class PedidoController extends Controller
{

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
    public function deletePedido($pedido_id){
        $pedido = Pedido::find($pedido_id);
        foreach($pedido->pessoas as $pessoa){
            $pessoa->valorConta($pessoa);
        }
        Pedido::destroy($pedido_id);
        return response()->json(['Pedido excluido']);
    }
    public function listPedidos(){
        return Pedido::all();

    }
    public function showPedido($pessoa_id){
        $pessoa = Pessoa::find($pessoa_id);
        if($pessoa){
            return $pessoa->pedidos;
        } else{
            $data = "Pessoa não encontrada";
            return response()->error($data, 400);
        }

    }
    public function createPedido(Request $request){
        /*Essa função recebe como parâmetro os dados do pedido
        incluindo um array de ids de clientes que dividirão os pedidos,
        depois salva um valor da divisão INDIVIDUAL que também é recebindo dentro do array,
        salva na Pivot e na table de Pessoas*/

        $pedido = new Pedido;
        $pedido->createPedido($request);
        $array_pessoas = json_decode($request->dividindo, true);

        foreach($array_pessoas as $p){
            $pessoa = Pessoa::find($p["id"]);
            $pedido->attachPedido($p["id"]);
            $pessoa->valorDivisao($p["valor"], $pedido->id);
            $pessoa->valorConta($pessoa);
        }

        return response()->success($pedido);
    }
}
