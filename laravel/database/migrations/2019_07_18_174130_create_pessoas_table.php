<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePessoasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pessoas', function (Blueprint $table) {
            $table->increments('id');
            $table->float('valorDividindo')->nullable()->default(0);
            $table->string('nome');
            $table->integer('mesa_id')->unsigned()->nullable();
            $table->timestamps();
        });
        Schema::table('pessoas', function (Blueprint $table){
            
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
        Schema::dropIfExists('pessoas');
    }
}
