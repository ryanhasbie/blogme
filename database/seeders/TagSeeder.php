<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'name' => $name = 'Laravel', 
                'slug' => str($name)->slug(),
            ],
            [
                'name' => $name = 'PHP', 
                'slug' => str($name)->slug(),
            ],
            [
                'name' => $name = 'HTML', 
                'slug' => str($name)->slug(),
            ],
            [
                'name' => $name = 'CSS', 
                'slug' => str($name)->slug(),
            ],
            [
                'name' => $name = 'Javascript', 
                'slug' => str($name)->slug(),
            ],
        ])->each(fn ($category) => \App\Models\Tag::create($category));
    }
}
