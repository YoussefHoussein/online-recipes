<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        //
        Schema::create('likes', function (Blueprint $table) {
            $table->id();
            $table->Integer('recipe_id');
            $table->Integer('user_id');
            $table->timestamps();
        });

        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->string('content');
            $table->Integer('recipe_id');
            $table->Integer('user_id');
            $table->timestamps();
        });

        Schema::create('Shopping_lists', function (Blueprint $table) {
            $table->id();
            $table->Integer('recipe_id');
            $table->Integer('user_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
