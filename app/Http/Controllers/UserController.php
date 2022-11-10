<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Resources\ArticleItemResource;

class UserController extends Controller
{
    public function show (User $user)
    {
        $articles = Article::query()
                    ->whereBelongsTo($user, 'author')
                    ->fastPaginate(3);
        return inertia('Users/Show', [
            'user' => [
                'name' => $user->name,
                'joined' => $user->created_at->diffForHumans(),
            ],
            'articles' => ArticleItemResource::collection($articles),
        ]);
    
    }
}
