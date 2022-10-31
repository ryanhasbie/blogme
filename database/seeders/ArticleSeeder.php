<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(5)->hasArticles(5)->create();
        \App\Models\Article::get()->each(function ($article) {
            $article->tags()->attach(
                \App\Models\Tag::get()->random(rand(1, 3))->pluck('id')
            );
        });
    }
}
