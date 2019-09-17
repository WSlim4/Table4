<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Estabelecimento extends Model
{
    public function mesas(){
       return $this->hasMany('App\Mesa');
    }
}
