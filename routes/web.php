<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;

Route::get('/', HomeController::class)->name('home');
Route::get('/dashboard', DashboardController::class)->name('dashboard')->middleware('auth');

Route::get('/categories/{category:slug}', [CategoryController::class, 'show'])->name('categories.show');

require __DIR__.'/auth.php';
