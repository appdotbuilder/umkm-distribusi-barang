<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\StockMovement
 *
 * @property int $id
 * @property int $product_id
 * @property string $type
 * @property int $quantity
 * @property int $stock_before
 * @property int $stock_after
 * @property string $reference_type
 * @property int $reference_id
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Product $product
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement query()
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement whereReferenceId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement whereReferenceType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement whereStockAfter($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement whereStockBefore($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|StockMovement whereUpdatedAt($value)

 * 
 * @mixin \Eloquent
 */
class StockMovement extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'product_id',
        'type',
        'quantity',
        'stock_before',
        'stock_after',
        'reference_type',
        'reference_id',
        'notes',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'product_id' => 'integer',
        'quantity' => 'integer',
        'stock_before' => 'integer',
        'stock_after' => 'integer',
        'reference_id' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the product that owns the stock movement.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}