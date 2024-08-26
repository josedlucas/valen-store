<template>
    <section id="section1Car">
        <div class="container-xl">
            <h4 class="text-warning fs-7 fw-light mt-xl-5">SOLICITUD DE PRESUPUESTO</h4>
            <form class="mt-4 row" action="" method="POST" id="form-contact">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-2" for="fullname">Nombre y Apellido</label>
                        <input class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg" type="text" id="fullname" name="fullname" placeholder="Nombre y apellido" />
                    </div>
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-2" for="phone">Teléfono</label>
                        <input class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg" type="tel" id="phone" name="phone" placeholder="+54 11 1234 5678" />
                    </div>
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-2" for="businnes">Empresa</label>
                        <input class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg" type="tel" id="businnes" name="phone" placeholder="Nombre de la empresa" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-2" for="dni">DNI / CUIT</label>
                        <input class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg" type="text" id="dni" name="phone" placeholder="23-00000000-8" />
                    </div>
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-2" for="email">Mail</label>
                        <input class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg" type="email" id="email" name="email" placeholder="Mail" />
                    </div>
                </div>
            </form>
            <h5 class="fs-xl-25 fs-14 mt-7">PRODUCTOS</h5>
            <div class="container-xl mb-xl-8 mt-xl-5">
                <div class="row mt-md-5 border-bottom pb-xl-5" v-for="item in car.carItems" :key="item">
                    <div class="col-xl-2">
                        <img class="w-70 rounded-4" :src="item.products.original_image" />
                    </div>
                    <div class="col-xl-10 d-flex align-items-end">
                        <div class="w-100">
                            <h6 class="fs-xl-22 fw-lighter">{{item.products.title}}</h6>
                            <div class="d-flex mt-xl-4">
                                <v-select
                                    v-model="item.colors"
                                    :options="item.products.colors"
                                    label="code"
                                    class="form-control p-0 rounded-0 w-30"
                                    placeholder="Select color">
                                    <template #selected-option="{ code }">
                                        <div style="display: flex; align-items: center;">
                                        <span :style="{ backgroundColor: code }"
                                              style="display: inline-block; width: 20px; height: 20px; border: 1px solid #ddd; margin-right: 10px;">
                                        </span>
                                            <span>{{ code }}</span>
                                        </div>
                                    </template>
                                    <template #option="{ code }">
                                        <div style="display: flex; align-items: center;">
                                        <span :style="{ backgroundColor: code }"
                                              style="display: inline-block; width: 20px; height: 20px; border: 1px solid #ddd; margin-right: 10px;">
                                        </span>
                                            <span>{{ code }}</span>
                                        </div>
                                    </template>
                                </v-select>
                                <select class="form-control rounded-0 form-control-lg w-15 ms-xl-3">
                                    <option :value="size.id" v-for="size in item.products.sizes" :key="size">S</option>
                                </select>
                                <InputCounter @input="receiveInputCounter" :count="item.total_product" class="ms-xl-3"/>
                                <button class="btn btn-dark px-3 py-2 rounded-0 ms-3 col-2" @click="deleteCarItem(car.id)" type="button">DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-md-6 px-xl-3">
                    <a class="btn btn-warning px-3 py-2 rounded-0 d-block col-3" type="button">ENVIAR PRESUPUESTO</a>
                    <router-link :to="{name: 'public-products.index'}" class="btn btn-dark px-3 py-2 rounded-0 ms-3 col-3" type="button">AGREGAR PRODUCTOS</router-link>
                    <a class="btn btn-outline-dark px-3 py-2 rounded-0 ms-3 col-2" type="button" @click="deleteCar(car.id)">BORRAR PEDIDO</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import { onMounted } from "vue";
import InputCounter from "@/components/InputCounter.vue";
import useCar from "@/composables/car";
import useColors from "@/composables/colors";
import useSizes from "@/composables/sizes";

const { car, getCar, deleteCarItem, deleteCar } = useCar();


onMounted(() => {
    getCar();
});



const receiveInputCounter = (value) => {
    console.log(value)
}

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
