<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pessoa;

class PessoaController extends Controller
{
    public function createPessoa(Request $request){

        $pessoa = new Pessoa;

        $pessoa->name = $request->name;
        $pessoa->mesa_id = $request->mesa_id;
        $pessoa->save();
        return response()->success($pessoa);
    }

    public function updatePessoa(Request $request, $id){

        $pessoa = Pessoa::findOrFail($id);

        if($request->name)
            $pessoa->name = $request->name;
        $pessoa->save();
        return response()->success($pessoa);
    }

    public function deletePessoa($id){

        Pessoa::destroy($id);
        return response()->json(['Pessoa deletada da mesa']);
    }

    public function listPessoa(){
        return Pessoa::all();
    }
    
}
