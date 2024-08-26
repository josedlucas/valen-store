<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $fillable = ['product_id', 'size_id', 'color_id', 'total_product', 'order_id'];

    // Relación con Order
    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    // Relación con Product
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    // Relación con Size
    public function size()
    {
        return $this->belongsTo(Size::class);
    }

    // Relación con Color
    public function color()
    {
        return $this->belongsTo(Color::class);
    }

}

