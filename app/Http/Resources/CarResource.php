<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CarResource extends JsonResource
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
            'session_id' => $this->session_id,
            'carItems' => CarItemResource::collection($this->carItems),
            'created_at' => $this->created_at->toDateString()
        ];
    }
}
