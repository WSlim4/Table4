<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePedidoPessoaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedido_pessoa', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('pedido_id')->unsigned();
            $table->integer('pessoa_id')->unsigned();
            $table->timestamps();
        });

        Schema::table('pedido_pessoa', function (Blueprint $table){
            $table->foreign('pedido_id')->references('id')->on('pedidos')->onDelete('cascade');
        });
        Schema::table('pedido_pessoa', function (Blueprint $table){
            $table->foreign('pessoa_id')->references('id')->on('pessoas')->onDelete('cascade');
        });

    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedido_pessoa');
    }
}
