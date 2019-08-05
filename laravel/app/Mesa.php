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
}