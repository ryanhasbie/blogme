<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'title' => $this->title,
            'slug'  => $this->slug,
            'created_at'  => $this->created_at->format('Y') == now()->format('Y') ? $this->created_at->format('d M') : $this->crated_at->format('d M ,Y'),
            'picture'  => $this->picture ? Storage::url($this->picture) : null,
            'tags'  => $this->tags->map(fn ($tag) => [
                'name'  => $tag->name,
                'slug'  => $tag->slug,
            ]),
            'author' => [
                'name' => $this->author->name,
                'username' => $this->author->username,
            ],
        ];
    }
}
