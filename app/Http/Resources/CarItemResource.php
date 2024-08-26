<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CarItemResource extends JsonResource
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
            'car_id' => $this->car_id,
            'products' => new ProductResource($this->product),
            'sizes' => new SizeResource($this->size),
            'colors' => new ColorResource($this->color),
            'total_product' => $this->total_product,
            'created_at' => $this->created_at->toDateString()
        ];
    }
}
