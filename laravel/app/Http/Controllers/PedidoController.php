<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pedido;
use App\Pessoa;

class PedidoController extends Controller
{

    public function updatePedido(Request $request, $pedido_id){
        Pedido::destroy($pedido_id);
        $pedido = new Pedido;
        $pedido->updatePedido($request);
        $array_pessoas = json_decode($request->dividindo, true);
        
        foreach($array_pessoas as $p){
            $pessoa = Pessoa::find($p["id"]);
            $pedido->attachPedido($p["id"]);
            $pessoa->valorDivisao($p["preco"], $pedido->id);
            $pessoa->valorConta($pessoa);
        }
        return response()->success($pedido);
    }
    public function deletePedido($pedido_id){
        $pedido = Pedido::find($pedido_id);
        $pessoas = $pedido->pessoas;
        Pedido::destroy($pedido_id);
        
        foreach($pessoas as $pessoa){
            $pessoa->valorConta($pessoa);
        }
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
            $pessoa->valorDivisao($p["preco"], $pedido->id);
            $pessoa->valorConta($pessoa);
        }

        return response()->success($pedido);
    }
}
