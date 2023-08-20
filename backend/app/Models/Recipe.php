<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function images()
    {
        return $this->hasMany(Image::class, 'recipe_id');
    }

    public function ingredients()
    {
        return $this->hasMany(Ingredient::class, 'recipe_id');
    }

    public function plan()
    {
        return $this->belongsTo(Plan::class, 'recipe_id');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class, 'recipe_id');
    }

    public function likes()
    {
        return $this->hasMany(Like::class, 'user_id');
    }

    public function shoppingLists()
    {
        return $this->belongsToMany(ShoppingLists::class, 'recipes-in-lists');
    }
}
