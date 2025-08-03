<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
    
    // Product management
    Route::resource('products', ProductController::class);
    
    // Incoming goods (placeholder routes)
    Route::get('/incoming-goods', function () {
        return Inertia::render('incoming-goods/index');
    })->name('incoming-goods.index');
    
    // Outgoing goods (placeholder routes)
    Route::get('/outgoing-goods', function () {
        return Inertia::render('outgoing-goods/index');
    })->name('outgoing-goods.index');
    
    // Stock reports (placeholder routes)
    Route::get('/reports/stock', function () {
        return Inertia::render('reports/stock');
    })->name('reports.stock');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
