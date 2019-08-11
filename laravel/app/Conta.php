<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conta extends Model
{
   public function pessoa(){
       return $this->belongsTo('App\Pessoa');
   }
}
