<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMesasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mesas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('estabelecimento_id')->nullable()->unsigned();
            $table->string('estabelecimento');
            $table->string('moeda');
            $table->double('valorTotal')->default(0)->nullable();
            $table->double('valorTotalHistorico')->default(0)->nullable();
            $table->timestamps();
        });

        Schema::table('mesas', function(Blueprint $table){
            
            $table->foreign('estabelecimento_id')->references('id')
                  ->on('estabelecimentos')->onDelete('cascade');
                
         });
       
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mesas');
    }
}
