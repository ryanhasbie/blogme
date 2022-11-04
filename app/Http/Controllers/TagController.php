<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use Illuminate\Http\Request;
use App\Http\Resources\ArticleItemResource;

class TagController extends Controller
{
    public function show (Tag $tag)
    {
        $articles = $tag->articles()->latest()->fastPaginate();
        return inertia('Tags/Show', [
            'tag'  => $tag,
            'articles'  => ArticleItemResource::collection($articles),
        ]);
    }
}
