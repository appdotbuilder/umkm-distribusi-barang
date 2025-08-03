<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('outgoing_goods', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_number')->unique();
            $table->foreignId('outlet_id')->constrained()->onDelete('cascade');
            $table->date('invoice_date');
            $table->enum('payment_method', ['cod', 'credit'])->default('cod');
            $table->date('due_date')->nullable();
            $table->integer('credit_days')->nullable();
            $table->decimal('total_amount', 15, 2)->default(0);
            $table->decimal('paid_amount', 15, 2)->default(0);
            $table->enum('payment_status', ['unpaid', 'partial', 'paid'])->default('unpaid');
            $table->text('notes')->nullable();
            $table->enum('status', ['draft', 'sent', 'cancelled'])->default('draft');
            $table->timestamps();
            
            $table->index('invoice_number');
            $table->index('outlet_id');
            $table->index('invoice_date');
            $table->index('payment_method');
            $table->index('payment_status');
            $table->index('status');
            $table->index('due_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('outgoing_goods');
    }
};