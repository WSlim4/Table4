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
Route::post('/pessoa', 'PessoaController@createPessoa');
Route::put('/pessoa/{id}','PessoaController@updatePessoa');
Route::get('/pessoa','PessoaController@listPessoa');
Route::delete('/pessoa/{id}', 'PessoaController@deletePessoa');


Route::get('/pedido/{id}','PedidoController@showPedido');
Route::get('/pedido','PedidoController@listPedido');
Route::post('/pedido','PedidoController@createPedido');
Route::put('/pedido/{id}','PedidoController@updatePedido');
Route::delete('/pedido/{id}','PedidoController@deletePedido');

Route::post('/mesa','MesaController@createMesa');
Route::get('listaPedidosMesa/{id}','MesaController@listaPedidos');

