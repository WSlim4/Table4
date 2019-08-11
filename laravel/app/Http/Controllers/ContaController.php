<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Conta;
use App\Pessoa;
use App\Mesa;

class ContaController extends Controller
{
    public function createConta($id){
        $pessoa = Pessoa::find($id);
        $conta = new Conta;
        $conta->create($pessoa);
        
        return response()->success($conta);
    }
    public function showContas($id){
        $mesa = Mesa::find($id);
        $pessoas = $mesa->pessoas;
        $mesa->contaTotal($pessoas);

        return response()->success($mesa->valor_total);
    }
}
