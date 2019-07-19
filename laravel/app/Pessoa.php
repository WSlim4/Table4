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
}
