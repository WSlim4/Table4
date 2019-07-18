<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pessoa extends Model
{
    use Notifiable;
    
    public function pedidos(){
        return $this->hasMany('App\Pedido');
    }
}
