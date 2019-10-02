<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Pessoa;

class PessoaController extends Controller
{
    public function createPessoa(Request $request){

        $pessoa = new Pessoa;
        $pessoa->createPessoa($request);

        return response()->success($pessoa);
    }

    public function updatePessoa(Request $request, $id){

        $pessoa = Pessoa::find($id);
        
        if($pessoa){
            $pessoa->updatePessoa($request);
            return response()->success($pessoa);
        } else{
            $data = "Pessoa não encontrada";
            return response()->error($data, 400);
        }
    }

    public function deletePessoa($id){

        Pessoa::destroy($id);
        return response()->json(['Pessoa deletada da mesa']);
    }

    public function listPessoas(){
        return Pessoa::all();
    }
    
}
