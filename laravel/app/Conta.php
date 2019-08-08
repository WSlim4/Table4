<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conta extends Model
{
    public function createConta($request){
        
        $this->pessoa_id = $request->pessoa_id;
        $this->save();
        
    }
}
