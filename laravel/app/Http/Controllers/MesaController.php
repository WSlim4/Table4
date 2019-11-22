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

    public function listMesas(){

        return Mesa::all();
    }

    public function showMesa($id){
        $mesa = Mesa::find($id);

        if($mesa){
            return response()->success($mesa);
        } else{
            $data = "Mesa não encontrada";
            return response()->error($data, 400);
        }
    }

    public function pedidosMesa($mesa_id){
        $mesa = Mesa::find($mesa_id);
        return $mesa->pedidos;
    }

    public function pessoasMesa($mesa_id){
        $mesa = Mesa::find($mesa_id);
        return $mesa->pessoas;
    }


    public function pessoasMesaComPedidos($mesa_id){
        $mesa = Mesa::find($mesa_id);

        $pessoas = collect([]);
        foreach($mesa->pessoas as $pessoa){
            $pessoas[] = Pessoa::with('pedidos')->find($pessoa->id);
        }

        return $pessoas;
    }

    public function valorPedido(Mesa $mesa_id, Pedido $pedido_id){
        $mesa = findOrfail($mesa_id);
        $mesa->valorPedido($pedido_id);
        return response()->success($mesa->valorPedido);
    }

    public function contaTotal($mesa_id){
        $mesa = Mesa::find($mesa_id);
        $pessoas = $mesa->pessoas;
        $mesa->contaTotal($pessoas);

        return response()->success($mesa->valorTotal);
    }
    /*public function contaTotalHistorico(Mesa $mesa_id){
        $mesa = Mesa::find($mesa_id);
        $mesa->contaTotalHistorico($mesa);
        return response()->success($mesa->valorTotalHistorico);
    }*/

}
