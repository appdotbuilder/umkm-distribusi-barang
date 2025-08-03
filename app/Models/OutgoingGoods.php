<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;

/**
 * App\Models\OutgoingGoods
 *
 * @property int $id
 * @property string $invoice_number
 * @property int $outlet_id
 * @property string $invoice_date
 * @property string $payment_method
 * @property string|null $due_date
 * @property int|null $credit_days
 * @property float $total_amount
 * @property float $paid_amount
 * @property string $payment_status
 * @property string|null $notes
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Outlet $outlet
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\OutgoingGoodsItem> $items
 * @property-read int|null $items_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Payment> $payments
 * @property-read int|null $payments_count
 * @property-read float $remaining_amount
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods query()
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods whereCreditDays($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods whereDueDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods whereInvoiceDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods whereInvoiceNumber($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods whereOutletId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods wherePaidAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods wherePaymentMethod($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods wherePaymentStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods whereTotalAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|OutgoingGoods whereUpdatedAt($value)

 * 
 * @mixin \Eloquent
 */
class OutgoingGoods extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'invoice_number',
        'outlet_id',
        'invoice_date',
        'payment_method',
        'due_date',
        'credit_days',
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
        'credit_days' => 'integer',
        'total_amount' => 'decimal:2',
        'paid_amount' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the outlet that owns the outgoing goods.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function outlet(): BelongsTo
    {
        return $this->belongsTo(Outlet::class);
    }

    /**
     * Get all items for this outgoing goods.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function items(): HasMany
    {
        return $this->hasMany(OutgoingGoodsItem::class);
    }

    /**
     * Get all payments for this outgoing goods.
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