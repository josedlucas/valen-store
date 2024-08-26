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
        Schema::table('order_items', function (Blueprint $table) {
            $table->foreign(['color_id'], 'order_items_colors_FK')->references(['id'])->on('colors')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign(['order_id'], 'order_items_orders_FK')->references(['id'])->on('orders')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign(['product_id'], 'order_items_products_FK')->references(['id'])->on('products')->onUpdate('restrict')->onDelete('restrict');
            $table->foreign(['size_id'], 'order_items_sizes_FK')->references(['id'])->on('sizes')->onUpdate('restrict')->onDelete('restrict');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('order_items', function (Blueprint $table) {
            $table->dropForeign('order_items_colors_FK');
            $table->dropForeign('order_items_orders_FK');
            $table->dropForeign('order_items_products_FK');
            $table->dropForeign('order_items_sizes_FK');
        });
    }
};
