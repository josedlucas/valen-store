<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CarItem extends Model
{
    use HasFactory;

    protected $fillable = ['car_id', 'product_id', 'size_id', 'color_id', 'total_product'];

    // Relación con Car
    public function car()
    {
        return $this->belongsTo(Car::class);
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
