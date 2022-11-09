<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticleTableResource extends JsonResource
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
            'id'        => $this->id,
            'author'    => $this->author,
            'title'     => $this->title,
            'status'    => str($this->status->label())->ucfirst(),
            'slug'      => $this->slug,
            'category'  => [
                'name'  => $this->category->name,
                'url'   => route('categories.show', $this->category),
            ],
            'tags'      => $this->tags->map(fn ($tag) => [
                'name'  => $tag->name,
                'url'   => route('tags.show', $tag->slug),
            ])
        ];
    }
}
