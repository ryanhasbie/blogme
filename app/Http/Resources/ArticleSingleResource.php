<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleSingleResource extends JsonResource
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
            'id'  => $this->id,
            'title' => $this->title,
            'teaser' => $this->teaser,
            'body' => $this->body,
            'author'   => $this->author,
            'picture'  => $this->picture ? Storage::url($this->picture) : null,
            'category' => [
                'name'  => $this->category->name,
                'slug'  => $this->category->slug,
            ],
            'tags' => $this->tags->map(fn ($tag) => [
                'name'  => $tag->name,
                'slug'  => $tag->slug,
            ]),
        ];
    }
}
