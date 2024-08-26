<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\StoreColorRequest;
use App\Http\Resources\ColorResource;
use App\Models\Color;
use Illuminate\Http\Request;

class ColorController extends Controller
{
    public function index()
    {
        $orderColumn = request('order_column', 'created_at');
        if (!in_array($orderColumn, ['id', 'name', 'created_at'])) {
            $orderColumn = 'created_at';
        }
        $orderDirection = request('order_direction', 'desc');
        if (!in_array($orderDirection, ['asc', 'desc'])) {
            $orderDirection = 'desc';
        }
        $categories = Color::
        when(request('search_id'), function ($query) {
            $query->where('id', request('search_id'));
        })
            ->when(request('search_title'), function ($query) {
                $query->where('code', 'like', '%'.request('search_title').'%');
            })
            ->when(request('search_global'), function ($query) {
                $query->where(function($q) {
                    $q->where('id', request('search_global'))
                        ->orWhere('code', 'like', '%'.request('search_global').'%');

                });
            })
            ->orderBy($orderColumn, $orderDirection)
            ->paginate(10);
        return ColorResource::collection($categories);
    }

    public function store(StoreColorRequest $request)
    {
        $this->authorize('color-create');
        $color = Color::create($request->validated());

        return new ColorResource($color);
    }

    public function show(Color $color)
    {
        $this->authorize('color-edit');
        return new ColorResource($color);
    }

    public function update(Color $color, StoreColorRequest $request)
    {
        $this->authorize('color-edit');
        $color->update($request->validated());

        return new ColorResource($color);
    }

    public function destroy(Color $color)
    {
        $this->authorize('color-delete');
        $color->delete();

        return response()->noContent();
    }

    public function getList()
    {
        return ColorResource::collection(Color::all());
    }
}
