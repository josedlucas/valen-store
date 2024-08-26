<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = ['total_price', 'total_product', 'buyer_id'];

    // Relación con Buyer
    public function buyer()
    {
        return $this->belongsTo(Buyer::class);
    }

    // Relación con OrderItem
    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }


}
