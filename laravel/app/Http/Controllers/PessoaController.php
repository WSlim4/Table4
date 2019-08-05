<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pessoa;

class PessoaController extends Controller
{
    public function create(Request $request){

        $pessoa = new Pessoa;
        $pessoa->createPessoa($request);

        return response()->success($pessoa);
    }

    public function update(Request $request, $id){

        $pessoa = Pessoa::findOrFail($id);
        $pessoa->updatePessoa($request);

        return response()->success($pessoa);
    }

    public function delete($id){

        Pessoa::destroy($id);
        return response()->json(['Pessoa deletada da mesa']);
    }

    public function list(){
        return Pessoa::all();
    }
    
}
