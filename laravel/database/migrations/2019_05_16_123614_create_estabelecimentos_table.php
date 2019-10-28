<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEstabelecimentosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('estabelecimentos', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->text('description');
            $table->string('site');
            $table->string('phone');
            $table->string('email');
            $table->string('instagram');
            $table->string('open_hours_monday');
            $table->string('open_hours_tuesday');
            $table->string('open_hours_wednesday');
            $table->string('open_hours_thursday');
            $table->string('open_hours_friday');
            $table->string('open_hours_saturday');
            $table->string('open_hours_sunday');
            $table->string('address_address');
            $table->string('address_latitude');
            $table->string('address_longitude');
            $table->boolean('parking')->nullable();
            $table->boolean('reservation')->nullable();
            $table->boolean('accessible')->nullable();
            $table->boolean('pet_friendly')->nullable();
            $table->boolean('couvert_payed')->nullable();
            $table->boolean('taxa_rolha_payed')->nullable();
            $table->boolean('credit_cards')->nullable();
            $table->boolean('qr_code_payment')->nullable();
            $table->string('reservation_contact')->nullable();
            $table->string('price_rate');
            $table->string('couvert_value')->nullable();
            $table->string('taxa_rolha_value')->nullable();
            $table->string('type');
            $table->string('type_details');
            $table->string('cuisine');
            $table->string('photo')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('estabelecimentos');
    }
}
