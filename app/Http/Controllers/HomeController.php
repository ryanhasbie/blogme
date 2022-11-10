<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Resources\ArticleItemResource;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $articles = Article::query()
                            ->select('title', 'slug', 'picture', 'user_id', 'created_at', 'id')
                            ->wherePublished()
                            ->limit(9)
                            ->latest()
                            ->get();
        return inertia('Home', [
            'articles' => ArticleItemResource::collection($articles),
        ]);
    }
}
