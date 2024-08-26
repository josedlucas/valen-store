<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\Buyer;
use App\Models\Car;
use App\Models\Order;
use App\Models\OrderItem;
use Illuminate\Http\Request;

class OrderController extends Controller
{

    public function createOrder(Request $request)
    {

        $buyer = Buyer::where('email', $request->email)->first();
        if (!$buyer) {
            $buyer = Buyer::create([
                'full_name' => $request->fullname,
                'dni' => $request->dni,
                'company' => $request->businnes,
                'phone' => $request->phone,
                'email' => $request->email
            ]);
        }

        $buyer->full_name = $request->fullname;
        $buyer->dni = $request->dni;
        $buyer->company = $request->businnes;
        $buyer->phone = $request->phone;
        $buyer->email = $request->email;
        $buyer->save();

        $order = $buyer->orders()->create([
            'buyer_id' => $buyer->id
        ]);

        $session_id = session()->getId();
        $orderCar = Car::where('session_id', $session_id)->with('carItems')->get();

        // crear order a partir del carrit
        foreach ($orderCar->pluck('carItems')[0] as $carItem) {
            $order->orderItems()->create([
                'product_id' => $carItem->product_id,
                'size_id' => $carItem->size_id,
                'color_id' => $carItem->color_id,
                'total_product' => $carItem->total_product
            ]);
        }
        // borrar carrito
        Car::where('session_id', $session_id)->delete();
        return new OrderResource($order);
    }

    public function index(Request $request){
        $order = Order::where('id', $request->id)
            ->with('buyer', 'orderItems')->first();
        return new OrderResource($order);
    }

}
