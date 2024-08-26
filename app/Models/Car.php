<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    use HasFactory;

    protected $fillable = ['session_id', 'total_price', 'total_product', 'buyer_id'];

    // Relación con CarItem
    public function carItems()
    {
        return $this->hasMany(CarItem::class);
    }

}
