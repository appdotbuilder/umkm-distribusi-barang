<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $purchasePrice = fake()->randomFloat(2, 10000, 500000);
        $sellingPrice = $purchasePrice * fake()->randomFloat(2, 1.2, 2.0);
        
        return [
            'code' => fake()->unique()->regexify('[A-Z]{3}[0-9]{4}'),
            'name' => fake()->words(3, true),
            'description' => fake()->sentence(),
            'unit' => fake()->randomElement(['pcs', 'box', 'kg', 'liter', 'meter']),
            'purchase_price' => $purchasePrice,
            'selling_price' => $sellingPrice,
            'stock' => fake()->numberBetween(0, 100),
            'minimum_stock' => fake()->numberBetween(5, 20),
            'status' => fake()->randomElement(['active', 'inactive']),
        ];
    }
}