<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Conta;
use App\Pessoa;

class ContaController extends Controller
{
    public function createConta(Request $request, $id){
        $pessoa = Pessoa::find($id);
        $conta = new Conta;
        $conta->create($pessoa,$id);
        return response()->success($conta);
    }
}
