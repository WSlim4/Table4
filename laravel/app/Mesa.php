<?php

namespace App;

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
    
    public function contaTotal($valorTotal){
        $this->valorTotal = $valorTotal;
        $this->save();
    }
}