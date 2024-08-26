<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'total_price' => $this->total_price,
            'total_product' => $this->total_product,
            'buyer_id' => new BuyerResource($this->buyer),
            'orderItems' => CarItemResource::collection($this->orderItems),
            'created_at' => $this->created_at->toDateString()
        ];
    }
}
