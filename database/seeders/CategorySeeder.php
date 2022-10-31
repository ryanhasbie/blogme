<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CategorySeeder extends Seeder
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
                'name' => $name = 'Blog', 
                'slug' => str($name)->slug(),
            ],
            [
                'name' => $name = 'Tutorials', 
                'slug' => str($name)->slug(),
            ],
            [
                'name' => $name = 'Packages', 
                'slug' => str($name)->slug(),
            ],
        ])->each(fn ($category) => Category::create($category));
    }
}
