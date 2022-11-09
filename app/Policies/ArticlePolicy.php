<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Article;
use App\Enums\ArticleStatus;
use Illuminate\Auth\Access\HandlesAuthorization;

class ArticlePolicy
{
    use HandlesAuthorization;

    public function view (?User $user, Article $article)
    {
    
        $statuses = collect(ArticleStatus::cases())->except(2)->pluck('value')->toArray();
        if(in_array($article->status->value, $statuses)) {
            if ($user) {
                return $article->user_id == $user->id ? $this->allow() : $this->denyAsNotFound();
            }
            return $this->denyAsNotFound();
        }
        return true;
    }
}
