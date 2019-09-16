<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Pessoa;

class Pedido extends Model
{
    public function pessoa(){
        return $this->belongsToMany('App\Pessoa');
    }
    public function createPedido($request){
        $this->nome = $request->nome;
        $this->quantidade = $request->quantidade;
        $this->preco = $request->preco;
        $this->save();
    }
    public function updatePedido($request){
        if($request->nome)
            $this->nome = $request->nome;
        if($request->quantidade)
            $this->quantidade = $request->quantidade;
        if($request->pessoa_id)
            $this->pessoa_id = $request->pessoa_id;
        if($request->preco)
            $this->preco = $request->preco;
        $this->save();
    }
   
}
