<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('adicionaPessoa', 'PessoaController@createPessoa');
Route::put('atualizaPessoa/{id}','PessoaController@updatePessoa');
Route::get('listaPessoa','PessoaController@listPessoa');
Route::delete('deletaPessoa/{id}', 'PessoaController@deletePessoa');


Route::get('mostraPedido/{id}','PedidoController@showPedido');
Route::get('listaPedido','PedidoController@listPedido');
Route::post('adicionaPedido','PedidoController@createPedido');
Route::put('atualizaPedido/{id}','PedidoController@updatePedido');
Route::delete('deletaPedido/{id}','PedidoController@deletePedido');

Route::post('criaMesa','MesaController@createMesa');

