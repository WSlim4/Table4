<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Pessoa;

class Pedido extends Model
{
    public function pessoa(){
        return $this->belongsTo('App\Pessoa');
    }
}
