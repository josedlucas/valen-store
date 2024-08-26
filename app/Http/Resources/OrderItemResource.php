<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'   => $this->id,
            'order_id' => $this->order_id,
            'products' => new ProductResource($this->product),
            'sizes' => new SizeResource($this->size),
            'colors' => new ColorResource($this->color),
            'total_product' => $this->total_product,
            'created_at' => $this->created_at->toDateString()
        ];
    }
}
