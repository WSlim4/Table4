<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mesa extends Model
{
    public function pessoas(){
        return $this->hasMany('App\Pessoa');
    }
    public function createMesa($request){
        $this->estabelecimento = $request->estabelecimento;
        $this->save();
    }   
    public function contaTotal($pessoas){
        
        $contas = [];

        foreach($pessoas as $pessoa){
            array_push($contas, $pessoa->conta->valor);
        }
        $valor_total = array_sum($contas);

        $this->valor_total = $valor_total;
        $this->save();

    }    
}