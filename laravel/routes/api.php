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
Route::get('/redirect', 'SocialAuthGoogleController@redirect');
Route::get('/callback', 'SocialAuthGoogleController@callback');

Route::post('/pessoa', 'PessoaController@create');
Route::put('/pessoa/{id}','PessoaController@update');
Route::get('/pessoa','PessoaController@list');
Route::delete('/pessoa/{id}', 'PessoaController@delete');

Route::get('/pedido/{id}','PedidoController@show');
Route::get('/pedido','PedidoController@list');
Route::get('/pedido/{pedido_id}/{pessoa_id}','PedidoController@fazPedido');
Route::post('/pedido','PedidoController@create');
Route::put('/pedido/{id}','PedidoController@update');
Route::delete('/pedido/{id}','PedidoController@delete');

Route::post('/mesa','MesaController@create');
Route::get('listaPedidosMesa/{id}','MesaController@listaPedidos');

Route::get('/conta/{id}','ContaController@createConta');
Route::get('/contas/{id}', 'ContaController@showContas');
