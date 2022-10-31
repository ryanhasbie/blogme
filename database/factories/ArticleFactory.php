<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'category_id'   => rand(1,3),
            'user_id'       => \App\Models\User::factory(),
            'title'         => $title = $this->faker->sentence(),
            'slug'          => str($title)->slug(),
            'teaser'        => $this->faker->sentence(),
            'body'          => $this->faker->sentence(),
        ];
    }
}
