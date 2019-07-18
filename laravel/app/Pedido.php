<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Pessoa;

class Pedido extends Model
{

    public function showPedido($id){
        $pessoa = new Pessoa;

        $this = Pedido::where($id, $pessoa->id)->get();
        $this->save();
    }
}
