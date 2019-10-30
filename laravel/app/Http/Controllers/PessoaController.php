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

    public function createPessoas(Request $request){


        foreach ($request->pessoas as $pessoa) {

            $request['nome'] = $pessoa;
            $request['mesa_id'] = $request->mesa_id;
            $pessoa = new Pessoa;

            $pessoa->createPessoa($request);
        }
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

    public function showPessoa($id){
        $pessoa = Pessoa::find($id);
        $pessoa->pedidos;
        return response()->json($pessoa);
    }

    public function showConta($pessoa_id){
            $pessoa = Pessoa::find($pessoa_id);
            return response()->success($pessoa->valorConta);
    }

}
