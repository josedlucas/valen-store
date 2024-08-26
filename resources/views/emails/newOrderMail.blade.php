
<div class="mb-3">
    <label class="ms-lg-auto ms-md-2 fw-bold" for="fullname">Nombre y Apellido</label>
    <div> {{ $order->buyer_id->full_name ?? '' }}</div>
</div>
<div class="mb-3">
    <label class="ms-lg-auto ms-md-2 fw-bold" for="phone">Teléfono</label>
    <div> {{ $order->buyer_id->phone ?? '' }}</div>
</div>
<div class="mb-3">
    <label class="ms-lg-auto ms-md-2 fw-bold" for="businnes">Empresa</label>
    <div> {{ $order->buyer_id->company ?? '' }}</div>
</div>

<div class="mb-3">
    <label class="ms-lg-auto ms-md-2 fw-bold" for="dni">DNI / CUIT</label>
    <div> {{ $order->buyer_id->dni ?? '' }}</div>
</div>
<div class="mb-3">
    <label class="ms-lg-auto ms-md-2 fw-bold" for="email">Mail</label>
    <div> {{ $order->buyer_id->email ?? '' }}</div>
</div>

@foreach($order->orderItems as $item)
<div class="row mt-md-5 mt-4  border-bottom pb-xl-5 pb-4 mb-5">
        <div class="col-xl-1 d-md-block d-flex p-0">
        <img class="w-md-100 rounded-md-3 rounded-3 w-30" src="{{ $item->product->original_image }}" />
        <div class="d-md-none d-block ms-3">
            <h6 class="fs-22 fw-light">{{$item->product->title}}</h6>
            <div class="d-block mt-xl-2 mt-4">
                <div class="fs-13 d-flex align-items-center mt-3">
                    Color:
                    <span class="py-1 px-2 ms-md-5 ms-5 rounded-2 position-absolute" style="background-color: {{$item->color->code}}; width: 15px; height: 15px">
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

