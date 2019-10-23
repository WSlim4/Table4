<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use App\Pedido;

class Pessoa extends Model
{
    use Notifiable;

    public function pedidos(){
        return $this->belongsToMany('App\Pedido')
                    ->withPivot('valor_divisao')
                    ->withTimestamps();
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

    public function valorDivisao($valor_divisao, $pedido_id){
        $this->pedidos()->sync([$pedido_id => [ 'valor_divisao' => $valor_divisao] ], false);
        $this->valorConta = $this->valorConta + $valor_divisao;
        $this->save();
    }


}
