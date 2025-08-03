<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\OutgoingGoodsItem
 *
 * @property int $id
 * @property int $outgoing_goods_id
 * @property int $product_id
 * @property int $quantity
 * @property float $unit_price
 * @property float $total_price
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\OutgoingGoods $outgoingGoods
 * @property-read \App\Models\Product $product
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoodsItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoodsItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoodsItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoodsItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoodsItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoodsItem whereOutgoingGoodsId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoodsItem whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoodsItem whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoodsItem whereTotalPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoodsItem whereUnitPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoodsItem whereUpdatedAt($value)

 * 
 * @mixin \Eloquent
 */
class OutgoingGoodsItem extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'outgoing_goods_id',
        'product_id',
        'quantity',
        'unit_price',
        'total_price',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'quantity' => 'integer',
        'unit_price' => 'decimal:2',
        'total_price' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the outgoing goods that owns the item.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function outgoingGoods(): BelongsTo
    {
        return $this->belongsTo(OutgoingGoods::class);
    }

    /**
     * Get the product that owns the item.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }
}