<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreSizeRequest;
use App\Http\Resources\SizeResource;
use App\Models\Size;
use Illuminate\Http\Request;

class SizeController extends Controller
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
        $categories = Size::
        when(request('search_id'), function ($query) {
            $query->where('id', request('search_id'));
        })
            ->when(request('search_title'), function ($query) {
                $query->where('name', 'like', '%'.request('search_title').'%');
            })
            ->when(request('search_global'), function ($query) {
                $query->where(function($q) {
                    $q->where('id', request('search_global'))
                        ->orWhere('name', 'like', '%'.request('search_global').'%');

                });
            })
            ->orderBy($orderColumn, $orderDirection)
            ->paginate(10);
        return SizeResource::collection($categories);
    }

    public function store(StoreSizeRequest $request)
    {
        $this->authorize('size-create');
        $size = Size::create($request->validated());

        return new SizeResource($size);
    }

    public function show(Size $size)
    {
        $this->authorize('size-edit');
        return new SizeResource($size);
    }

    public function update(Size $size, StoreSizeRequest $request)
    {
        $this->authorize('size-edit');
        $size->update($request->validated());

        return new SizeResource($size);
    }

    public function destroy(Size $size)
    {
        $this->authorize('size-delete');
        $size->delete();

        return response()->noContent();
    }

    public function getList()
    {
        return SizeResource::collection(Size::all());
    }
}
