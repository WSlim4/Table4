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
            $table->integer('pessoa_id')->unsigned();
            $table->string('nome');
            $table->timestamps();
        });
        Schema::table('pedidos', function(Blueprint $table){
            
            $table->foreign('pessoa_id')
                  ->references('id')
                  ->on('pessoas');
                  
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
