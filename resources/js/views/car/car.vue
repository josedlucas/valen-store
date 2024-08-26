<template>
    <section id="section1Car">
        <form  @submit.prevent="submitForm" class="container-xl mt-5">
            <h4 class="text-warning fs-7 fw-light mt-xl-5">SOLICITUD DE PRESUPUESTO</h4>
            <div class="mt-4 row" @submit.prevent="submitForm">
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-md-2" for="fullname">Nombre y Apellido</label>
                        <input v-model="carForm.fullname" class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg" type="text" id="fullname" name="fullname" placeholder="Nombre y apellido" />
                        <div class="text-danger mt-1">
                            {{ errors.fullname }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-md-2" for="phone">Teléfono</label>
                        <input v-model="carForm.phone" class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg" type="tel" id="phone" name="phone" placeholder="+54 11 1234 5678" />
                        <div class="text-danger mt-1">
                            {{ errors.phone }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-md-2" for="businnes">Empresa</label>
                        <input v-model="carForm.businnes" class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg" type="tel" id="businnes" name="phone" placeholder="Nombre de la empresa" />
                        <div class="text-danger mt-1">
                            {{ errors.businnes }}
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-md-2" for="dni">DNI / CUIT</label>
                        <input v-model="carForm.dni" class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg" type="text" id="dni" name="phone" placeholder="23-00000000-8" />
                        <div class="text-danger mt-1">
                            {{ errors.dni }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="ms-lg-auto ms-md-2" for="email">Mail</label>
                        <input v-model="carForm.email" class="mt-lg-1 mt-1 form-control rounded-0 form-control-lg" type="email" id="email" name="email" placeholder="Mail" />
                        <div class="text-danger mt-1">
                            {{ errors.email }}
                        </div>
                    </div>
                </div>
            </div>
            <h5 class="fs-xl-25 fs-20 mt-5">PRODUCTOS</h5>
            <div class="container-xl mb-xl-8 mt-xl-5 mt-5">
                <div class="row mt-md-5 mt-4  border-bottom pb-xl-5 pb-4" v-for="(item, index) in car?.carItems" :key="item">
                    <div class="col-xl-1 d-md-block d-flex p-0">
                        <img class="w-md-100 rounded-md-3 rounded-3 w-25" :src="item.products.original_image" />
                        <div class="d-md-none d-block ms-3">
                            <h6 class="fs-22 fw-light">{{item.products.title}}</h6>
                            <InputCounter v-model:count="item.total_product" @update:count="updateCar" style="width: 110px" />
                        </div>
                    </div>
                    <div class="col-xl-10 d-md-flex align-items-end ps-md-5">
                        <div class="w-100">
                            <h6 class="fs-xl-22 fw-light d-md-block d-none">{{item.products.title}}</h6>
                            <div class="d-flex mt-xl-4 mt-4">
                                <v-select v-model="item.colors" :options="item.products.colors" label="code" class="form-control p-0 rounded-0 w-md-30 w-50" placeholder="Select color" @update:modelValue="updateCar">
                                    <template #selected-option="{ code }">
                                        <div style="display: flex; align-items: center;">
                                            <span class="me-3">Color</span>
                                            <span class="rounded-2" :style="{ backgroundColor: code }"
                                                  style="display: inline-block; width: 20px; height: 20px; border: 1px solid #ddd; margin-right: 10px;">
                                            </span>
                                        </div>
                                    </template>
                                    <template #option="{ code }">
                                        <div style="display: flex; align-items: center;">
                                            <span class="me-3">Color</span>
                                            <span  class="rounded-2" :style="{ backgroundColor: code }"
                                                  style="display: inline-block; width: 20px; height: 20px; border: 1px solid #ddd; margin-right: 10px;">
                                            </span>
                                        </div>
                                    </template>
                                </v-select>
                                <select class="form-control rounded-0 form-control-lg w-md-15 w-25 ms-xl-3 ms-2" @update:modelValue="updateCar()">
                                    <option :value="size.id" v-for="size in item.products.sizes" :key="size">{{size.name}}</option>
                                </select>
                                <InputCounter v-model:count="item.total_product" @update:count="updateCar"   class="ms-xl-3 d-md-inline-flex d-none"/>
                                <button class="btn btn-dark px-3 py-2 rounded-0 ms-2 col-2" @click="deleteCarItem(car.id)" type="button">
                                    <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.75305 14.1377C1.75305 12.1775 1.75187 10.2172 1.75385 8.25694C1.75444 7.68133 2.07842 7.27154 2.61673 7.15035C3.21478 7.01575 3.83758 7.48468 3.87078 8.0958C3.8752 8.17799 3.87243 8.2605 3.87243 8.34288C3.87243 12.1481 3.87236 15.9533 3.8725 19.7585C3.87256 21.0302 4.74006 21.8978 6.01201 21.8979C8.80356 21.8982 11.5951 21.8982 14.3867 21.8979C15.6579 21.8978 16.5247 21.0296 16.5247 19.7568C16.5249 15.9022 16.5243 12.0475 16.5255 8.1929C16.5257 7.66053 16.8605 7.26111 17.3917 7.14626C17.8379 7.04981 18.3387 7.29656 18.5295 7.73447C18.5996 7.89533 18.6393 8.0832 18.6395 8.25878C18.6456 12.1464 18.6498 16.034 18.6419 19.9215C18.6378 21.9918 17.0556 23.7368 14.9873 23.9777C14.7836 24.0015 14.5775 24.016 14.3725 24.0162C11.5644 24.0187 8.75643 24.0186 5.94837 24.0176C3.88768 24.0168 2.19288 22.6106 1.81649 20.5823C1.77174 20.3411 1.75629 20.0914 1.7557 19.8455C1.75088 17.9429 1.75305 16.0403 1.75305 14.1377Z" fill="white"/>
                                        <path d="M5.97394 3.95949C5.97394 3.45703 5.97269 2.98083 5.97447 2.5047C5.9754 2.25776 5.96615 2.00943 5.9886 1.76421C6.0389 1.21316 6.46849 0.801784 7.02363 0.799738C9.13997 0.791751 11.2564 0.790893 13.3727 0.800002C13.9827 0.802643 14.4084 1.2657 14.4205 1.91081C14.4314 2.49546 14.4232 3.08038 14.4234 3.66516V3.95949H14.7131C16.006 3.95956 17.2989 3.9552 18.5917 3.96128C19.36 3.96497 19.8717 4.65841 19.6366 5.36029C19.4922 5.79146 19.1052 6.07834 18.6478 6.07847C13.0151 6.07973 7.38246 6.07999 1.74984 6.07821C1.17087 6.07808 0.715537 5.61878 0.710257 5.04641C0.704646 4.43622 1.15741 3.96557 1.78001 3.962C3.08113 3.95461 4.38225 3.95963 5.68337 3.95949H5.97394ZM8.11259 3.94101H12.2793V2.92796H8.11259V3.94101Z" fill="white"/>
                                        <path d="M7.03601 13.9735C7.03601 12.7636 7.03529 11.5538 7.03634 10.344C7.0368 9.72069 7.47266 9.2521 8.05599 9.24378C8.67885 9.23493 9.15189 9.68882 9.1532 10.3249C9.15823 12.7692 9.15842 15.2135 9.15301 17.6578C9.15162 18.2824 8.68223 18.7375 8.07513 18.7338C7.47451 18.73 7.03673 18.2654 7.03627 17.6276C7.03535 16.4095 7.03601 15.1915 7.03601 13.9735Z" fill="white"/>
                                        <path d="M13.3614 13.9857C13.3614 15.2037 13.3623 16.4218 13.361 17.6398C13.3603 18.2608 12.921 18.7267 12.3342 18.7337C11.7138 18.741 11.2449 18.2833 11.2438 17.6454C11.2396 15.2093 11.2399 12.7731 11.2436 10.337C11.2446 9.69693 11.7089 9.23828 12.3286 9.2437C12.927 9.24892 13.3606 9.71481 13.3611 10.3562C13.362 11.566 13.3614 12.7758 13.3614 13.9857Z" fill="white"/>
                                    </svg>
                                    <span class="text-white ms-2 d-none d-md-inline-block">Delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-md-6 px-xl-3 mb-5 mt-5">
                    <button class="btn btn-warning px-3 py-2 rounded-0 d-block col-md-2 col-12 mb-3" type="submit">ENVIAR PRESUPUESTO</button>
                    <div class="ms-md-3 col-md-2 col-6 px-0">
                        <router-link :to="{name: 'public-products.index'}" class="btn btn-dark px-3 py-2 rounded-0" type="button">
                            <span class="d-md-block d-none">AGREGAR PRODUCTOS</span>
                            <span class="d-md-none d-block">+ PRODUCTOS</span>
                        </router-link>
                    </div>
                    <div class="ms-md-3 col-md-2 col-6 px-0 justify-content-end justify-content-md-start d-flex d-md-block">
                        <a class="btn btn-outline-dark px-3 py-2 rounded-0" type="button" @click="deleteCar(car.id)">BORRAR PEDIDO</a>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script setup>

import {onMounted, reactive, ref} from "vue";
import InputCounter from "@/components/InputCounter.vue";
import useCar from "@/composables/car";
import useOrder from "@/composables/orders";
import {defineRule, useField, useForm} from "vee-validate";
import {required, min} from "@/validation/rules"

const { car, getCar, deleteCarItem, deleteCar, updateCar } = useCar();
const { storeOrder } = useOrder();

defineRule('required', required)
defineRule('min', min);
// Define a validation schema
const schema = {
    fullname: 'required|min:5',
    phone: 'required|min:5',
    businnes: 'required',
    dni: 'required',
    email: 'required',
}

const {validate, errors} = useForm({validationSchema: schema})

const {value: fullname} = useField('fullname', null, {initialValue: ''});
const {value: phone} = useField('phone', null, {initialValue: ''});
const {value: businnes} = useField('businnes', null, {initialValue: ''});
const {value: dni} = useField('dni', null, {initialValue: ''});
const {value: email} = useField('email', null, {initialValue: ''});


const carForm = reactive({
    fullname,
    phone,
    businnes,
    dni,
    email
})

function submitForm() {
    validate().then(form => {
       if (form.valid) storeOrder(carForm)
    })
}

onMounted(() => {
    getCar();
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
