<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\IncomingGoodsItem
 *
 * @property int $id
 * @property int $incoming_goods_id
 * @property int $product_id
 * @property int $quantity
 * @property float $unit_price
 * @property float $total_price
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\IncomingGoods $incomingGoods
 * @property-read \App\Models\Product $product
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoodsItem newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoodsItem newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoodsItem query()
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoodsItem whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoodsItem whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoodsItem whereIncomingGoodsId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoodsItem whereProductId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoodsItem whereQuantity($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoodsItem whereTotalPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoodsItem whereUnitPrice($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoodsItem whereUpdatedAt($value)

 * 
 * @mixin \Eloquent
 */
class IncomingGoodsItem extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'incoming_goods_id',
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
     * Get the incoming goods that owns the item.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function incomingGoods(): BelongsTo
    {
        return $this->belongsTo(IncomingGoods::class);
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