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
    public function createMesa($request){
        $this->estabelecimento = $request->estabelecimento;
        $this->moeda = $request->moeda;
        $this->save();
    }   
    public function contaTotal($pessoas){
        /*Função que calcula a conta total de uma mesa
            Entrada->array de pessoas na mesa
            Saída->um inteiro que é adicionado ao atributo da mesa*/

        $contas = [];

        foreach($pessoas as $pessoa){
            array_push($contas, $pessoa->conta->valor);
        }
        $valor_total = array_sum($contas);

        $this->valor_total = $valor_total;
        $this->save();

    }    
}