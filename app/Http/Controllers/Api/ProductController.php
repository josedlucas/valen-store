<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductRequest;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Color;
use App\Models\Product;
use App\Models\Size;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $orderColumn = request('order_column', 'created_at');
        if (!in_array($orderColumn, ['id', 'title', 'created_at'])) {
            $orderColumn = 'created_at';
        }
        $orderDirection = request('order_direction', 'desc');
        if (!in_array($orderDirection, ['asc', 'desc'])) {
            $orderDirection = 'desc';
        }
        $products = Product::with('media')
            ->whereHas('categories', function ($query) {
                if (request('search_category')) {
                    $categories = explode(",", request('search_category'));
                    $query->whereIn('id', $categories);
                }
            })
            ->when(request('search_id'), function ($query) {
                $query->where('id', request('search_id'));
            })
            ->when(request('search_title'), function ($query) {
                $query->where('title', 'like', '%' . request('search_title') . '%');
            })
            ->when(request('search_content'), function ($query) {
                $query->where('content', 'like', '%' . request('search_content') . '%');
            })
            ->when(request('search_global'), function ($query) {
                $query->where(function ($q) {
                    $q->where('id', request('search_global'))
                        ->orWhere('title', 'like', '%' . request('search_global') . '%')
                        ->orWhere('content', 'like', '%' . request('search_global') . '%');

                });
            })
            ->when(!auth()->user()->hasPermissionTo('product-all'), function ($query) {
                $query->where('user_id', auth()->id());
            })
            ->orderBy($orderColumn, $orderDirection)
            ->paginate(10);
        return ProductResource::collection($products);
    }

    public function store(StoreProductRequest $request)
    {
        $this->authorize('product-create');

        $validatedData = $request->validated();
        $validatedData['user_id'] = auth()->id();
        $product = Product::create($validatedData);

        $categories = explode(",", $request->categories);
        $category = Category::findMany($categories);

        $colors = explode(",", $request->colors);
        $color = Color::findMany($colors);

        $sizes = explode(",", $request->sizes);
        $size = Size::findMany($sizes);

        $product->categories()->attach($category);
        $product->colors()->attach($color);
        $product->sizes()->attach($size);


        // Manejar múltiples archivos de tipo thumbnail
        if ($request->hasFile('thumbnail')) {
            foreach ($request->file('thumbnail') as $file) {
                $product->addMedia($file)->preservingOriginal()->toMediaCollection('images');
            }
        }

        return new ProductResource($product);
    }

    public function show(Product $product)
    {
        $this->authorize('product-edit');
        if ($product->user_id !== auth()->user()->id && !auth()->user()->hasPermissionTo('product-all')) {
            return response()->json(['status' => 405, 'success' => false, 'message' => 'You can only edit your own products']);
        } else {
            return new ProductResource($product);
        }
    }

    public function update(Product $product, StoreProductRequest $request)
    {
        $this->authorize('product-edit');
        if ($product->user_id !== auth()->id() && !auth()->user()->hasPermissionTo('product-all')) {
            return response()->json(['status' => 405, 'success' => false, 'message' => 'You can only edit your own products']);
        } else {
            $product->update($request->validated());

            $category = Category::findMany($request->categories);
            $product->categories()->sync($category);

            $color = Color::findMany($request->colors);
            $product->colors()->sync($color);

            $size = Size::findMany($request->sizes);
            $product->sizes()->sync($size);

            return new ProductResource($product);
        }
    }

    public function destroy(Product $product)
    {
        $this->authorize('product-delete');
        if ($product->user_id !== auth()->id() && !auth()->user()->hasPermissionTo('product-all')) {
            return response()->json(['status' => 405, 'success' => false, 'message' => 'You can only delete your own products']);
        } else {
            $product->delete();
            return response()->noContent();
        }
    }

    public function getProducts(Request $request)
    {
        $products = Product::with('categories')
        ->with('colors')
        ->with('sizes')
        ->with('media');

        if($request->input('category')){
            $products = $products->whereHas('categories', function ($query) {
                $query->where('id', request('category'));
            });
        }

        if($request->input('grouper')){
            $products = $products->whereHas('categories', function ($query) {
                $query->whereHas('categoryGrouper', function ($query) {
                    $query->where('id', request('grouper'));
                });
            });
        }
        $products = $products->latest()
        ->paginate();

        return ProductResource::collection($products);

    }



    public function getProductsInterest($id)
    {
        $produc = Product::with('categories', 'colors', 'sizes', 'user', 'media')->findOrFail($id);
        $products = Product::whereHas('categories', function ($query) use ($produc) {
            $query->whereIn('category_id', $produc->categories->pluck('id'));
        })->paginate();
        return  ProductResource::collection($products);
    }

    public function getCategoryByProducts($id)
    {
        $products = Product::whereRelation('categories', 'category_id', '=', $id)->paginate();

        return ProductResource::collection($products);
    }

    public function getProduct($id)
    {
        return Product::with('categories', 'colors', 'sizes', 'user', 'media')->findOrFail($id);
    }

    public function searchProduct($search)
    {
        $products = Product::where('title', 'like', '%' . $search . '%')
            ->orWhereHas('categories', function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%');
            })
            ->paginate(5);

        return ProductResource::collection($products);
    }
}
