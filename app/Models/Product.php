<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Product
 *
 * @property int $id
 * @property string $code
 * @property string $name
 * @property string|null $description
 * @property string $unit
 * @property float $purchase_price
 * @property float $selling_price
 * @property int $stock
 * @property int $minimum_stock
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\StockMovement> $stockMovements
 * @property-read int|null $stock_movements_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\IncomingGoodsItem> $incomingGoodsItems
 * @property-read int|null $incoming_goods_items_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\OutgoingGoodsItem> $outgoingGoodsItems
 * @property-read int|null $outgoing_goods_items_count
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Product newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product query()
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereMinimumStock($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product wherePurchasePrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereSellingPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereStock($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereUnit($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product active()
 * @method static \Illuminate\Database\Eloquent\Builder|Product lowStock()
 * @method static \Database\Factories\ProductFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'code',
        'name',
        'description',
        'unit',
        'purchase_price',
        'selling_price',
        'stock',
        'minimum_stock',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'purchase_price' => 'decimal:2',
        'selling_price' => 'decimal:2',
        'stock' => 'integer',
        'minimum_stock' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get all stock movements for this product.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function stockMovements(): HasMany
    {
        return $this->hasMany(StockMovement::class);
    }

    /**
     * Get all incoming goods items for this product.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function incomingGoodsItems(): HasMany
    {
        return $this->hasMany(IncomingGoodsItem::class);
    }

    /**
     * Get all outgoing goods items for this product.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function outgoingGoodsItems(): HasMany
    {
        return $this->hasMany(OutgoingGoodsItem::class);
    }

    /**
     * Scope a query to only include active products.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    /**
     * Scope a query to only include products with low stock.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeLowStock($query)
    {
        return $query->whereRaw('stock <= minimum_stock');
    }
}