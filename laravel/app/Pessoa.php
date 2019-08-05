<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Pessoa extends Model
{
    use Notifiable;
    
    public function pedidos(){
        return $this->hasMany('App\Pedido');
    }

    public function mesas(){
        return $this->belongsTo('App\Mesa');
    }
    public function createPessoa($request){
        
        $this->nome = $request->nome;
        $this->mesa_id = $request->mesa_id;
        $this->save();
    }
    public function updatePessoa($request){

        if($request->nome)
            $this->nome = $request->nome;
        if($request->mesa_id)
            $this->mesa_id = $request->mesa_id;
        $this->save();
        
    }
}
