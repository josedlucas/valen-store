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
        Schema::create('order_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('product_id')->index('order_items_products_fk');
            $table->unsignedBigInteger('size_id')->nullable()->index('order_items_sizes_fk');
            $table->unsignedBigInteger('color_id')->nullable()->index('order_items_colors_fk');
            $table->integer('total_product');
            $table->timestamps();
            $table->unsignedBigInteger('order_id')->index('order_items_orders_fk');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
