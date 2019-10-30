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
Route::post('/pessoas','PessoaController@createPessoas');
Route::put('/pessoa/{id}', 'PessoaController@updatePessoa');
Route::get('/pessoa/{id}', 'PessoaController@showPessoa');
Route::delete('/pessoa/{id}', 'PessoaController@deletePessoa');

Route::get('/pedido/{id}', 'PedidoController@showPedido');
//Route::get('/pedido', 'PedidoController@listPedidos');
Route::get('/pedido/{pedido_id}/{pessoa_id}', 'PedidoController@fazPedido');
Route::post('/pedido', 'PedidoController@createPedido');
Route::put('/pedido/{id}', 'PedidoController@updatePedido');
Route::delete('/pedido/{id}', 'PedidoController@deletePedido');

Route::post('/mesa','MesaController@createMesa');
Route::get('/mesa','MesaController@listMesas');
Route::get('/mesa/{id}','MesaController@showMesa');
Route::get('/pedidosMesa/{id}','MesaController@pedidosMesa');
Route::get('/pessoasMesa/{id}', 'MesaController@pessoasMesa');
Route::get('pessoasMesaComPedidos/{id}', 'MesaController@pessoasMesaComPedidos');

Route::post('/estabelecimento', 'EstabelecimentoController@createEstabelecimento');
Route::put('/estabelecimento/{id}', 'EstabelecimentoController@updateEstabelecimento');
Route::get('/estabelecimento/{id}', 'EstabelecimentoController@showEstabelecimento');
Route::get('/estabelecimento', 'EstabelecimentoController@listEstabelecimentos');
Route::delete('/estabelecimento/{id}', 'EstabelecimentoController@deleteEstabelecimento');
Route::post('/estabelecimentosProximos', 'EstabelecimentoController@estabelecimentosProximos');

Route::get('/conta/{id}','PessoaController@showConta');
Route::get('/conta/{mesa_id}/{pedido_id}','MesaController@valorPedido');
Route::get('/contasMesa/{id}', 'MesaController@contaTotal');
