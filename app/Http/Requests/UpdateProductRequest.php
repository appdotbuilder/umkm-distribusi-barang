<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'code' => 'required|string|max:50|unique:products,code,' . $this->route('product')->id,
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'unit' => 'required|string|max:20',
            'purchase_price' => 'required|numeric|min:0',
            'selling_price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'minimum_stock' => 'required|integer|min:0',
            'status' => 'required|in:active,inactive',
        ];
    }

    /**
     * Get custom error messages for validator errors.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'code.required' => 'Product code is required.',
            'code.unique' => 'Product code already exists.',
            'name.required' => 'Product name is required.',
            'unit.required' => 'Unit is required.',
            'purchase_price.required' => 'Purchase price is required.',
            'selling_price.required' => 'Selling price is required.',
            'stock.required' => 'Stock quantity is required.',
            'minimum_stock.required' => 'Minimum stock is required.',
        ];
    }
}