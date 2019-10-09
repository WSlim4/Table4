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
            $table->text('dividindo')->nullable();
            $table->timestamps();
        });
        /*Schema::table('pedidos', function(Blueprint $table){

            $table->foreign('pessoa_id')->references('id')->on('pessoas')->onDelete('cascade');

        });*/

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
