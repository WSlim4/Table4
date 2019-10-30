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

Route::post('/pessoa', 'PessoaController@createPessoa'); //Rota que cria uma pessoa na mesa
Route::put('/pessoa/{id}', 'PessoaController@updatePessoa'); //Rota que atualiza os dados da pessoa na mesa
Route::get('/pessoa/{id}', 'PessoaController@showPessoa'); //Rota que busca no BD por uma pessoa através do seu ID
Route::delete('/pessoa/{id}', 'PessoaController@deletePessoa'); //Rota que deleta uma pessoa da mesa

Route::get('/pedido/{pedido_id}', 'PedidoController@showPedido'); //Rota que busca no BD por um pedido através do seu ID
Route::post('/pedido', 'PedidoController@createPedido'); //Rota que adiciona um pedido a mesa
Route::put('/pedido/{pedido_id}', 'PedidoController@updatePedido'); //Rota que atualiza um pedido
Route::delete('/pedido/{pedido_id}', 'PedidoController@deletePedido'); //Rota que deleta um pedido da mesa

Route::post('/mesa','MesaController@createMesa'); //Rota que cria uma mesa

Route::get('/pedidosMesa/{mesa_id}','MesaController@pedidosMesa'); //Rota que mostra os pedidos da mesa
Route::get('/pessoasMesa/{mesa_id}', 'MesaController@pessoasMesa'); //Rota que mostra as pessoas na mesa
Route::get('/pessoasMesaComPedidos/{mesa_id}', 'MesaController@pessoasMesaComPedidos'); //Rota que mostra as pessoas com pedidos na mesa

Route::post('/estabelecimento', 'EstabelecimentoController@createEstabelecimento'); //Rota que cria um estabelecimento
Route::put('/estabelecimento/{id}', 'EstabelecimentoController@updateEstabelecimento'); //Rota que atualiza os dados do estabelecimento
Route::get('/estabelecimento/{id}', 'EstabelecimentoController@showEstabelecimento'); //Rota que mostra um estabelecimento através de seu ID
Route::get('/estabelecimento', 'EstabelecimentoController@listEstabelecimentos'); //Rota que lista todos os estabelecimentos do BD
Route::delete('/estabelecimento/{id}', 'EstabelecimentoController@deleteEstabelecimento'); //Rota que deleta um estabelecimento

Route::get('/conta/{pessoa_id}','PessoaController@showConta'); //Rota que mostra a conta individual
Route::get('/contasMesa/{mesa_id}', 'MesaController@contaTotal'); //Rota que mostra a conta total da mesa

