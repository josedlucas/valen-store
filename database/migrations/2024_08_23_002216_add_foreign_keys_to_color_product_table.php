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
        Schema::table('color_product', function (Blueprint $table) {
            $table->foreign(['color_id'], 'color_product_colors_FK')->references(['id'])->on('colors')->onUpdate('restrict')->onDelete('cascade');
            $table->foreign(['product_id'], 'color_product_products_FK')->references(['id'])->on('products')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('color_product', function (Blueprint $table) {
            $table->dropForeign('color_product_colors_FK');
            $table->dropForeign('color_product_products_FK');
        });
    }
};
