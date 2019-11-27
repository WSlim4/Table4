<?php

namespace App;

use DB;
use Illuminate\Database\Eloquent\Model;

class Mesa extends Model
{
    public function pessoas(){
        return $this->hasMany('App\Pessoa');
    }
    public function estabelecimento(){
        return $this->belongsTo('App\Estabelecimento');
    }
    public function pedidos(){
        return $this->hasMany('App\Pedido');
    }

    public function createMesa($request){
        $this->estabelecimento = $request->estabelecimento;
        $this->moeda = $request->moeda;
        $this->save();
    }

    public function contaTotal($pessoas){
        $contaTotal = []; 
        foreach($pessoas as $pessoa){
            if ($pessoa->pago === false){
                array_push($contaTotal, $pessoa->valorConta);
            }
        }
        $this->valorTotal = array_sum($contaTotal);
        $this->save();
    }

    public function contaTotalHistorico(Mesa $mesa){
        $preco = $mesa->pedidos()->sum(DB::raw('preco*quantidade'));
        $this->valorTotalHistorico = $preco;
        $this->save();
    }

    public function valorPedido(Pedido $id){
        $pedido = findOrFail($id);
        $valor = $pedido->quantidade * $pedido->preco;
        return $valor;
    }
}
