<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Buyer extends Model
{
    use HasFactory;

    protected $fillable = ['full_name', 'dni', 'company', 'phone', 'email'];

    // Relación con Order
    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function cars()
    {
        return $this->hasMany(Car::class);
    }

}
