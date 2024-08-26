<template>
    <section id="section1Car">
        <div class="container-xl mt-5">
            <h4 class="text-warning fs-7 fw-light mt-xl-5">¡Muchas gracias!</h4>
            <p class="fw-light mb-xl-5">Hemos recibido tu pedido de presupuesto, te contestaremos a la brevedad.</p>
            <div class="mt-4 row border-bottom-md-0 border-bottom border-top-md-0 border-top py-4">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-md-2 fw-bold" for="fullname">Nombre y Apellido</label>
                        <div> {{ order.buyer_id?.full_name ?? '' }}</div>
                    </div>
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-md-2 fw-bold" for="phone">Teléfono</label>
                        <div> {{ order.buyer_id?.phone ?? '' }}</div>
                    </div>
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-md-2 fw-bold" for="businnes">Empresa</label>
                        <div> {{ order.buyer_id?.company ?? '' }}</div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-md-2 fw-bold" for="dni">DNI / CUIT</label>
                        <div> {{ order.buyer_id?.dni ?? '' }}</div>
                    </div>
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-md-2 fw-bold" for="email">Mail</label>
                        <div> {{ order.buyer_id?.email ?? '' }}</div>
                    </div>
                </div>
            </div>
            <h5 class="fs-xl-25 fs-20 mt-5">PRODUCTOS</h5>
            <div class="container-xl mb-xl-8 mt-xl-5 mt-5">
                <div class="row mt-md-5 mt-4  border-bottom pb-xl-5 pb-4 mb-5" v-for="(item, index) in order.orderItems" :key="item">
                    <div class="col-xl-1 d-md-block d-flex p-0">
                        <img class="w-md-100 rounded-md-3 rounded-3 w-30" :src="item.products.original_image" />
                        <div class="d-md-none d-block ms-3">
                            <h6 class="fs-22 fw-light">{{item.products.title}}</h6>
                            <div class="d-block mt-xl-2 mt-4">
                                <div class="fs-13 d-flex align-items-center mt-3">
                                    Color:
                                    <span class="py-1 px-2 ms-md-5 ms-5 rounded-2 position-absolute"
                                          :style="`background-color: ${item.colors.code}; width: 15px; height: 15px`">
                                    </span>
                                </div>
                                <div class="fs-13 d-flex align-items-center mt-n2">
                                    Talla:
                                    <span class="py-1 px-2 rounded-2 ">
                                        {{item.sizes?.name}}
                                    </span>
                                </div>
                                <div class="fs-13 d-flex align-items-center mt-n2">
                                    Cantidad:
                                    <span class="py-1 px-2 rounded-2 ">
                                        {{item.total_product}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-10 d-md-flex d-none align-items-end ps-md-5">
                        <div class="w-100">
                            <h6 class="fs-xl-22 fw-light d-md-block d-none">{{item.products.title}}</h6>
                            <div class="d-block mt-xl-2 mt-4">
                                <div class="fs-13 d-flex align-items-center mt-3">
                                    Color:
                                    <span class="py-1 px-2 ms-md-5 rounded-2 position-absolute"
                                          :style="`background-color: ${item.colors.code}; width: 15px; height: 15px`">
                                    </span>
                                </div>
                                <div class="fs-13 d-flex align-items-center mt-n2">
                                    Talla:
                                    <span class="py-1 px-2 rounded-2 ">
                                        {{item.sizes?.name}}
                                    </span>
                                </div>
                                <div class="fs-13 d-flex align-items-center mt-n2">
                                    Cantidad:
                                    <span class="py-1 px-2 rounded-2 ">
                                        {{item.total_product}}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import {computed, onMounted, reactive, ref} from "vue";
import useOrder from "@/composables/orders";
import {useRoute} from "vue-router";

const { order, getOrder } = useOrder();
const route = useRoute();

onMounted(async () => {
    await getOrder(route.params.id);
    console.log(order)
});


</script>
<style>
    .v-select, .v-select input {
        border: none !important;
    }
    .vs--searchable .vs__dropdown-toggle {
        cursor: text;
        height: 100%;
        border-radius: 0;
    }
</style>
