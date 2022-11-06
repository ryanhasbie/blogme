<?php

namespace App\Traits;

use App\Models\Role;

trait HasRole
{

    public function roles ()
    {
        return $this->belongsToMany(Role::class);
    }

    public function hasRole ()
    {
        return $this->roles()->count() >= 1 ? true : false;
    }

    public function hasAnyRoles (...$roles)
    {
        foreach($roles as $role) {
            if (str($this->roles->pluck('name'))->containsAll($role)) {
                return true;
            }
        }
        return false;
    }


}