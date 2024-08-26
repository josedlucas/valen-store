<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BuyerResource extends JsonResource
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
            'full_name' => $this->full_name,
            'dni' => $this->dni,
            'company' => $this->company,
            'phone' => $this->phone,
            'email' => $this->email,
            'created_at' => $this->created_at->toDateString()
        ];
    }
}
