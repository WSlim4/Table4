<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePedidosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pedidos', function(Blueprint $table){
            $table->increments('id');
            $table->integer('quantidade');
            $table->float('preco');
            $table->string('nome');
            $table->integer('mesa_id')->unsigned();
            $table->timestamps();
        });

        Schema::table('pedidos', function (Blueprint $table){

            $table->foreign('mesa_id')->references('id')->on('mesas')->onDelete('cascade');
        });

    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pedidos');
    }
}
