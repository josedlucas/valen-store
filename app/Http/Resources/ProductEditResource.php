<?php

namespace App\Http\Resources;

use Exception;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductEditResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        //if no resize image
        try {
            $resized_image = $this->getMedia('*')[0]->getUrl('resized-image');
        } catch (Exception $e) {
            $resized_image="";
        }
        return [
            'id' => $this->id,
            'title' => $this->title,
            'categories' => $this->categories->pluck('id'),
            'colors' => $this->colors->pluck('id'),
            'sizes' => $this->sizes->pluck('id'),
            'content' => $this->content,
            'original_image' => count($this->getMedia('*')) > 0 ? $this->getMedia('*')[0]->getUrl() : null,
            'original_all_images' => $this->getMedia('*')->map(function ($media) {
                return [
                    'id' => $media->id,
                    'url' => $media->getUrl(),
                    'name' => $media->name
                ];
            }),
            'resized_image' => $resized_image,
            'created_at' => $this->created_at->toDateString()
        ];
    }
}
