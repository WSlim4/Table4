<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mesa;

class MesaController extends Controller
{
    public function createMesa(Request $request){
        $mesa = new Mesa;

        $mesa->estabelecimento = $request->estabelecimento;
        $mesa->save();

        return response()->success($mesa);
    }
}
