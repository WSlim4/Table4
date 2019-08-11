<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conta extends Model
{
   public function pessoa(){
       return $this->belongsTo('App\Pessoa');
   }
   public function create($pessoa,$id){
    /*Função que cria uma conta*/
       $c = $pessoa->conta;
       $itens = [];
    
       if($pessoa){
            $pedidos = $pessoa->pedidos;

            foreach($pedidos as $pedido){ //Pega o valor e salva num array
                array_push($itens,($pedido->quantidade*$pedido->preco)); 
            
            }
        }
       $valor = array_sum($itens);
    
       if($c){
           Conta::destroy($c->id); //Exclui uma conta caso ela exista e cria outra
           $this->pessoa_id = $pessoa->id;
           $this->valor = $valor;
           $this->save();
         } else{
           $this->pessoa_id = $pessoa->id;
           $this->valor = $valor;
           $this->save();
         }
   }
}
