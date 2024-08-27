<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCarRequest;
use App\Http\Resources\CarResource;
use App\Http\Resources\ProductResource;
use App\Models\Car;
use App\Models\CarItem;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;

class CarController extends Controller
{

    public function index()
    {
        $session_id = session()->getId();
        $car = Car::where('session_id', $session_id)->with('carItems')->limit(1)->get();
        return CarResource::collection($car);
    }

    public function store(StoreCarRequest $request)
    {
        try {

            $product = Product::find($request->product_id);

            if (!$product) {
               throw new Exception('Product not found');
            }

            $session_id = session()->getId();
            $car = Car::where('session_id', $session_id)
                ->first();

            if (!$car) {
                $car = Car::create([
                    'session_id' => $session_id,
                    'total_product' => $request->total_product,
                ]);
            }

            $exists = $car->carItems()
                ->where('product_id', $request->product_id)
                ->where('size_id', $request->size_id ?? null)
                ->where('color_id', $request->color_id ?? null)
                ->exists();

            if ($exists) {
                $car->carItems()->where('product_id', $request->product_id)->update([
                    'total_product' => $request->total_product
                ]);
                return response()->json(['message' => 'Car updated successfully'], 200);
            }

            $car->carItems()->create([
                'product_id' => $request->product_id,
                'size_id' => $request->size_id ?? null,
                'color_id' => $request->color_id ?? null,
                'total_product' => $request->total_product
            ]);

            return new CarResource($car);

        } catch (Exception $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    // update
    public function update(Car $car, Request $request)
    {
        // Validar los datos entrantes
        $validatedData = $request->validate([
            'total_price' => 'nullable|numeric',
            'total_product' => 'required|integer',
            'session_id' => 'required|string',
            'carItems' => 'required|array',
            'carItems.*.id' => 'required|integer',
            'carItems.*.total_product' => 'required|integer',
            // Añadir validaciones adicionales según los campos necesarios
        ]);

        // Actualizar la información del carrito
        $car->total_price = $validatedData['total_price'];
        $car->total_product = $validatedData['total_product'];
        $car->session_id = $validatedData['session_id'];
        $car->save();


        // Actualizar los ítems del carrito
        foreach ($request->carItems as $itemData) {
            $carItem = CarItem::findOrFail($itemData['id']);
            $carItem->total_product = $itemData['total_product'];
            $carItem->color_id = $itemData['colors']['id'] ?? null;
            $carItem->size_id = $itemData['sizes']['id'] ?? null;
            // Actualizar cualquier otra información relevante de CarItem
            $carItem->save();
        }

        return response()->json([
            'message' => 'Carrito actualizado correctamente',
            'car' => $car,
        ]);
    }

    // destroy
    public function destroy($id)
    {
        $carItem = carItem::find($id);
        if (!$carItem) {
            return response()->json(['message' => 'Car not found'], 404);
        }
        $carItem->delete();

        $car = Car::find($carItem->car_id);
        return new CarResource($car);
    }

    public function deleteAll(Car $id){
        $id->delete();
        return response()->json(['message' => 'Car deleted successfully'], 200);
    }

}
