
<div style="display: flex;">
    <label style="font-weight: bold;" for="fullname">Nombre y Apellido:</label>
    <div style="margin-left: 7px;"> {{ $order->buyer->full_name ?? '' }}</div>
</div>
<div style="display: flex;">
    <label style="font-weight: bold;" for="phone">Teléfono:</label>
    <div style="margin-left: 7px;"> {{ $order->buyer->phone ?? '' }}</div>
</div>
<div style="display: flex;">
    <label style="font-weight: bold;" for="businnes">Empresa:</label>
    <div style="margin-left: 7px;"> {{ $order->buyer->company ?? '' }}</div>
</div>

<div style="display: flex;">
    <label style="font-weight: bold;" for="dni">DNI / CUIT:</label>
    <div style="margin-left: 7px;"> {{ $order->buyer->dni ?? '' }}</div>
</div>
<div style="display: flex;">
    <label style="font-weight: bold;" for="email">Email:</label>
    <div style="margin-left: 7px;"> {{ $order->buyer->email ?? '' }}</div>
</div>

@foreach($order->orderItems as $item)
<div class="row mt-md-5 mt-4  border-bottom pb-xl-5 pb-4 mb-5">
    <div class="col-xl-1 d-md-block d-flex p-0" style="display: flex;align-items: center;margin-top: 2rem;">
        <img src="{{ $item->product->original_image }}" style="
            width: 90px;
            height: 90px;
            border-radius: 10px;
        " />
        <div style="margin-left: 13px;">
            <h3 style="margin-bottom: 4px;margin-top: 0px;">{{$item->product->title}}</h3>
            <div class="d-block mt-xl-2 mt-4">
                <div class="fs-13 d-flex align-items-center mt-3">
                    Color:
                    <span class="py-1 px-2 ms-md-5 ms-5 rounded-2 position-absolute"
                          style="
                          background-color: {{$item->color->code}};
                          width: 15px;
                          height: 15px;
                          position: absolute;
                          border-radius: 20px;
                          margin-top: 2px;
                          margin-left: 2px;
                          ">
                    </span>
                </div>
                <div class="fs-13 d-flex align-items-center mt-n2">
                    Talla:
                    <span class="py-1 px-2 rounded-2 ">
                        {{$item->size?->name}}
                    </span>
                </div>
                <div class="fs-13 d-flex align-items-center mt-n2">
                    Cantidad:
                    <span class="py-1 px-2 rounded-2 ">
                        {{$item->total_product}}
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
@endforeach

