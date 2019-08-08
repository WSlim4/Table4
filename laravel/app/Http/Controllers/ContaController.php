<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Conta;

class ContaController extends Controller
{
    public function create(Request $request){
        $conta = new Conta;
        $conta->createConta($request);
        
        return response()->success($conta);
    }
}
