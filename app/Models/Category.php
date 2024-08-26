<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'category_grouper_id'];

    /**
     * Get the posts for the category.
     */
    public function products()
    {
        return $this->belongsToMany(Product::class,'category_product');
    }

    public function categoryGrouper()
    {
        return $this->belongsTo(CategoryGrouper::class, 'category_grouper_id');
    }
}
