<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('session_id')->index('cars_sessions_fk');
            $table->float('total_price', null, 0)->nullable();
            $table->timestamps();
            $table->integer('total_product')->nullable();
            $table->unsignedBigInteger('buyer_id')->index('cars_buyers_fk');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cars');
    }
};
