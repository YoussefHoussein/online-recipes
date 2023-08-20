<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\Recipe;
use App\Models\Ingredient;
use App\Models\Image;
use App\Models\User;
use App\Models\Like;
use App\Models\Comment;

use Auth;
class RecipeController extends Controller
{
    //
    public function addEditRecipe(Request $request){
        $name = $request->name;
        $cuisine = $request->cuisine;
        $ingredients = $request->ingredients;
        $images = $request->images;
        if($request->recipe_id){
            $recipe = Recipe::find($request->recipe_id);
            $user_ingredients = $recipe->ingredients;
            $user_images = $recipe->images;
            $recipe->name = $name;
            $recipe->cuisine = $cuisine;
            foreach($ingredients as $index => $ingredient){
                if(isset($user_ingredients[$index])){
                    $user_ingredients[$index]->name = $ingredient;
                    $user_ingredients[$index]->save();
                }
                else{
                    $new_ingredient = new Ingredient();
                    $new_ingredient->name = $ingredient;
                    $new_ingredient->recipe_id = $recipe->id;
                    $new_ingredient->save();
                }
            }
            foreach($images as $index => $image){
                if(isset($user_image[$index])){
                    $image = $images[$index];
                    $decodedImage = base64_decode($image);
                    $imageName = Str::uuid() . '.png';
                    Storage::disk('public')->put('images/' . $imageName, $decodedImage);
                    $user_image->name = $imageName;
                    $user_image->save();
                }
                else{
                    $images = new Image();
                    $decodedImage = base64_decode($image);
                    $imageName = Str::uuid() . '.png';
                    Storage::disk('public')->put('images/' . $imageName, $decodedImage);
                    $images->name = $imageName;
                    $images->recipe_id = $recipe->id;
                    $images->save();
                }
                
            }
            return $recipe;
        }
        $recipe = new Recipe();
        
        
        $user = Auth::user();
        $recipe->name = $request->name;
        $recipe->cuisine =$request->cuisine;
        $recipe->user_id = $user->id;
        $recipe->save();
        $ingredients_input = $request->ingredients;
        $images_input = $request->images;
        foreach($ingredients_input as $input){
            $ingredients = new Ingredient();
            $ingredients->name = $input;
            $ingredients->recipe_id = $recipe->id;
            $ingredients->save();
        }
        foreach($images_input as $input){
            $images = new Image();
            $decodedImage = base64_decode($input);
            $imageName = Str::uuid() . '.png';
            Storage::disk('public')->put('images/' . $imageName, $decodedImage);
            $images->name = $imageName;
            $images->recipe_id = $recipe->id;
            $images->save();
        }
        return $recipe;
    }
    public function deleteRecipe(Request $request){
        $recipe_id = $request->recipe_id;
        $recipe = Recipe::find($recipe_id);
        $images = $recipe->images;
        $ingredients = $recipe->ingredients;

        foreach($images as $image){
            $image->delete();
        }
        foreach($ingredients as $ingredient){
            $ingredient->delete();
        }
        $recipe->delete();

        return response()->json([
            "status" => "success",
        ]);
    }
    public function getRecipes(){
        $recipes = Recipe::all();
        return $recipes;
    }
    public function like(Request $request){
        $user = Auth::user();
        $recipe = Recipe::find($request->recipe_id);

        $like = Like::where('user_id', $user->id)->where('recipe_id', $recipe->id)->first();

        if($like){
            $like->delete();
            $message = "Unliked";
        }
        else{
            $like = new Like();
            $like->user_id = $user->id;
            $like->recipe_id =$recipe->id;
            $like->save();
            $message = "Liked";
        }
        return response()->json([
            'status' => 'success',
            'message' => $message,
        ]);
    }
    public function comment(Request $request){
        $user = Auth::user();
        $recipe = Recipe::find($request->recipe_id);
        $content = $request->content;

        $comment = new Comment();
        $comment->user_id = $user->id;
        $comment->recipe_id = $recipe->id;
        $comment->content =$content;
        $comment->save();

        return response()->json([
            'status' => 'success',
            'message' => $comment,
        ]);
    }
}
