<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\IncomingGoods;
use App\Models\OutgoingGoods;
use App\Models\StockMovement;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display the dashboard with key metrics.
     */
    public function index()
    {
        $totalProducts = Product::active()->count();
        $lowStockProducts = Product::lowStock()->count();
        $totalIncomingGoods = IncomingGoods::whereMonth('created_at', now()->month)->count();
        $totalOutgoingGoods = OutgoingGoods::whereMonth('created_at', now()->month)->count();
        
        $pendingPayments = IncomingGoods::where('payment_status', '!=', 'paid')
            ->where('payment_method', 'credit')
            ->sum('total_amount');
        
        $pendingReceivables = OutgoingGoods::where('payment_status', '!=', 'paid')
            ->where('payment_method', 'credit')
            ->sum('total_amount');
        
        $recentMovements = StockMovement::with(['product'])
            ->latest()
            ->take(10)
            ->get();
        
        $lowStockProductsList = Product::lowStock()
            ->active()
            ->take(5)
            ->get();
        
        return Inertia::render('dashboard', [
            'stats' => [
                'totalProducts' => $totalProducts,
                'lowStockProducts' => $lowStockProducts,
                'totalIncomingGoods' => $totalIncomingGoods,
                'totalOutgoingGoods' => $totalOutgoingGoods,
                'pendingPayments' => $pendingPayments,
                'pendingReceivables' => $pendingReceivables,
            ],
            'recentMovements' => $recentMovements,
            'lowStockProducts' => $lowStockProductsList,
        ]);
    }
}