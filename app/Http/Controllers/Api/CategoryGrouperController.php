<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryGrouperRequest;
use App\Http\Resources\CategoryGrouperResource;
use App\Models\CategoryGrouper;
use Illuminate\Http\Request;

class CategoryGrouperController extends Controller
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
        $categories = CategoryGrouper::
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
        return CategoryGrouperResource::collection($categories);
    }

    public function store(StoreCategoryGrouperRequest $request)
    {
        $this->authorize('category-create');
        $categorygrouper = CategoryGrouper::create($request->validated());

        return new CategoryGrouperResource($categorygrouper);
    }

    public function show(CategoryGrouper $categorygrouper)
    {
        $this->authorize('category-edit');
        return new CategoryGrouperResource($categorygrouper);
    }

    public function update(CategoryGrouper $categorygrouper, StoreCategoryGrouperRequest $request)
    {
        $this->authorize('category-edit');
        $categorygrouper->update($request->validated());

        return new CategoryGrouperResource($categorygrouper);
    }

    public function destroy(CategoryGrouper $categorygrouper)
    {
        $this->authorize('category-delete');
        $categorygrouper->delete();

        return response()->noContent();
    }

    public function getList()
    {
        return CategoryGrouperResource::collection(CategoryGrouper::all());
    }
}
