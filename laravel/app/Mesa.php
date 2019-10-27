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

    public function contaTotal(Mesa $mesa){
        $preco = $mesa->pedidos()->sum(DB::raw('preco*quantidade'));
        $this->valorTotal = $preco;
        $this->save();
    }

    public function valorPedido(Pedido $id){
        $pedido = findOrFail($id);
        $valor = $pedido->quantidade * $pedido->preco;
        return $valor;
    }
}
