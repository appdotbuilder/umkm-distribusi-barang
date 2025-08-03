<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Supplier;
use App\Models\Outlet;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        User::factory()->create([
            'name' => 'Admin UMKM',
            'email' => 'admin@distribubiz.com',
        ]);

        // Create sample data
        Supplier::factory(10)->create();
        Outlet::factory(15)->create();
        Product::factory(50)->create();
    }
}