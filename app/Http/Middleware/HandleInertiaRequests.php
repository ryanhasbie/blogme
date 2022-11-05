<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return mixed[]
     */
    public function share(Request $request)
    {
        $categoriesGlobal = \App\Models\Category::query()->whereHas('articles')->select('name', 'slug')->get();
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => [
                    'name'  => $request->user()->name,
                    'email' => $request->user()->email,
                    'hasRole' => $request->user()->hasRole(),
                ],
            ],
            'categories_global' => cache()->rememberForever('categories_global', fn () => $categoriesGlobal),
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
