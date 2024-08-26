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
        Schema::table('cars', function (Blueprint $table) {
            $table->foreign(['buyer_id'], 'cars_buyers_FK')->references(['id'])->on('buyers')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign(['session_id'], 'cars_sessions_FK')->references(['id'])->on('sessions')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('cars', function (Blueprint $table) {
            $table->dropForeign('cars_buyers_FK');
            $table->dropForeign('cars_sessions_FK');
        });
    }
};
