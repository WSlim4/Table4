<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use App\Pedido;

class Pessoa extends Model
{
    use Notifiable;
    
    public function pedidos(){
        return $this->belongsToMany('App\Pedido');
    }

    public function mesa(){
        return $this->belongsTo('App\Mesa');
    }
    
    public function conta(){
        return $this->hasOne('App\Conta');
    }
    
    public function createPessoa($request){
        /*Função que cria uma pessoa no BD
            Entrada->request passada pela controller
            Saída->pessoa salva no BD*/

        $this->nome = $request->nome;
        $this->mesa_id = $request->mesa_id;
        $this->save();
    }
    
    public function updatePessoa($request){
        /*Função que atualiza uma pessoa no BD
            Entrada->request passada pela controller
            Saída->pessoa salva no BD*/


        if($request->nome)
            $this->nome = $request->nome;
        if($request->mesa_id)
            $this->mesa_id = $request->mesa_id;
        $this->save();
    }
    public function attachPedido($pedido_id){
        /*Função que adiciona o ID de uma pessoa
        a um pedido específico*/

        $this->pedidos()->attach($pedido_id);
        $this->save();
    }

  
}
