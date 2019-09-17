<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Estabelecimento extends Model
{
    public function mesas(){
       return $this->hasMany('App\Mesa');
    }

    public function createEstabelecimento($request){
        /*Função que cria um estabelecimento*/
        
        $this->nome = $request->nome;
        $this->save();
    }

    public function updateEstabelecimento($request){
        /*Função que atualiza um estabelecimento*/

        if ($request->nome)
            $this->nome = $request->nome;
        $this->save();
    }
    
}
