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
        Schema::table('size_product', function (Blueprint $table) {
            $table->foreign(['product_id'], 'size_product_products_FK')->references(['id'])->on('products')->onUpdate('restrict')->onDelete('cascade');
            $table->foreign(['size_id'], 'size_product_sizes_FK')->references(['id'])->on('sizes')->onUpdate('restrict')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('size_product', function (Blueprint $table) {
            $table->dropForeign('size_product_products_FK');
            $table->dropForeign('size_product_sizes_FK');
        });
    }
};
