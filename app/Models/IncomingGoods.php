<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

/**
 * App\Models\IncomingGoods
 *
 * @property int $id
 * @property string $invoice_number
 * @property int $supplier_id
 * @property string $invoice_date
 * @property string $payment_method
 * @property string|null $due_date
 * @property float $total_amount
 * @property float $paid_amount
 * @property string $payment_status
 * @property string|null $notes
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Supplier $supplier
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\IncomingGoodsItem> $items
 * @property-read int|null $items_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Payment> $payments
 * @property-read int|null $payments_count
 * @property-read float $remaining_amount
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods query()
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods whereDueDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods whereInvoiceDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods whereInvoiceNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods wherePaidAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods wherePaymentMethod($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods wherePaymentStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods whereSupplierId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods whereTotalAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|IncomingGoods whereUpdatedAt($value)

 * 
 * @mixin \Eloquent
 */
class IncomingGoods extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'invoice_number',
        'supplier_id',
        'invoice_date',
        'payment_method',
        'due_date',
        'total_amount',
        'paid_amount',
        'payment_status',
        'notes',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'invoice_date' => 'date',
        'due_date' => 'date',
        'total_amount' => 'decimal:2',
        'paid_amount' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the supplier that owns the incoming goods.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function supplier(): BelongsTo
    {
        return $this->belongsTo(Supplier::class);
    }

    /**
     * Get all items for this incoming goods.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(IncomingGoodsItem::class);
    }

    /**
     * Get all payments for this incoming goods.
     *
     * @return \Illuminate\Database\Eloquent\Relations\MorphMany
     */
    public function payments(): MorphMany
    {
        return $this->morphMany(Payment::class, 'payable');
    }

    /**
     * Get the remaining amount to be paid.
     */
    public function getRemainingAmountAttribute(): float
    {
        return $this->total_amount - $this->paid_amount;
    }
}