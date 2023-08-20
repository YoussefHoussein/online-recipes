<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RecipeController;


Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    

});

Route::post("add-edit-recipe", [RecipeController::class, "addEditRecipe"]);
Route::post("delete-recipe", [RecipeController::class, "deleteRecipe"]);
Route::get("get-recipes", [RecipeController::class, "getRecipes"]);
Route::post("like-recipe", [RecipeController::class, "like"]);
Route::post("comment", [RecipeController::class, "comment"]);
Route::post("add-to-shopping-list", [RecipeController::class, "addToShoppingList"]);
Route::post("plan", [RecipeController::class, "plan"]);
Route::post("search-recipes", [RecipeController::class, "search"]);
Route::post("search-recipes-ingredient", [RecipeController::class, "searchByIngredients"]);

