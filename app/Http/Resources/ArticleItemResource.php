<?php

namespace App\Http\Resources;

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
            'teaser' => $this->teaser,
            'created_at'  => $this->created_at->format('Y') == now()->format('Y') ? $this->created_at->format('d M') : $this->crated_at->format('d M ,Y'),
            'tags'  => $this->tags->map(fn ($tag) => [
                'name'  => $tag->name,
                'slug'  => $tag->slug,
            ]),
            'author' => [
                'name' => $this->author->name,
            ],
        ];
    }
}
