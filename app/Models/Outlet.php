<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Outlet
 *
 * @property int $id
 * @property string $name
 * @property string|null $contact_person
 * @property string|null $phone
 * @property string|null $email
 * @property string|null $address
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\OutgoingGoods> $outgoingGoods
 * @property-read int|null $outgoing_goods_count
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Outlet newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Outlet newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Outlet query()
 * @method static \Illuminate\Database\Eloquent\Builder|Outlet whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outlet whereContactPerson($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outlet whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outlet whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outlet whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outlet whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outlet wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outlet whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outlet whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Outlet active()
 * @method static \Database\Factories\OutletFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Outlet extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'contact_person',
        'phone',
        'email',
        'address',
        'status',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get all outgoing goods for this outlet.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function outgoingGoods(): HasMany
    {
        return $this->hasMany(OutgoingGoods::class);
    }

    /**
     * Scope a query to only include active outlets.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }
}