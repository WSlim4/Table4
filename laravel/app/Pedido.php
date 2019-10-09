<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Pessoa;

class Pedido extends Model
{
    public function pessoas(){
        return $this->belongsToMany('App\Pessoa')
                    ->withPivot('valor_divisao')
                    ->withTimestamps();
    }
    protected $casts = [
        'dividindo' => 'array'
    ];

    public function createPedido($request){
        /*Função que cria um pedido no BD
            Entrada->uma request passada pela controller
            Saída->pedido salvo no BD*/
        
        $this->nome = $request->nome;
        $this->quantidade = $request->quantidade;
        $this->preco = $request->preco;
        $this->dividindo = $request->dividindo;
        $this->save();
    }
    public function updatePedido($request){
        /*Função que atualiza um pedido no BD
            Entrada->uma request passada pela controller
            Saída->pedido salvo no BD*/
       
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
    public function attachPedido($pessoas_id){
        /*Função que adiciona o ID de uma pessoa
        a um pedido específico*/

        $this->pessoas()->attach($pessoas_id);
        $this->save();
    }
    
}
