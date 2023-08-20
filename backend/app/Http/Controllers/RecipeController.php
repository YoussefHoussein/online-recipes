<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RecipeController extends Controller
{
    //
    public function addEditRecipe(Request $request){
        $name = $request->name;
        $cuisine = $request->cuisine;
        $ingredients = $request->ingredients;
        if($request->recipe_id){
            
        }
        return "add";
    }
    public function deleteRecipe(Request $request){

    }
}
