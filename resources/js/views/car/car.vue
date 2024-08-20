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
                <div class="row mt-md-5 border-bottom pb-xl-5" v-for="slide in 4" :key="slide">
                    <div class="col-xl-2">
                        <img class="w-70 rounded-4" src="../../../valenweb/assets/images/products/Camisa.jpeg" />
                    </div>
                    <div class="col-xl-10 d-flex align-items-end">
                        <div class="w-100">
                            <h6 class="fs-xl-22 fw-lighter">Mameluco industrial</h6>
                            <div class="d-flex mt-xl-4">
                                <select class="form-control rounded-0 form-control-lg w-35">
                                    <option value="1">Azul marino</option>
                                    <option value="2">Rojo</option>
                                    <option value="3">Verde</option>
                                </select>
                                <select class="form-control rounded-0 form-control-lg w-15 ms-xl-3">
                                    <option value="1">S</option>
                                    <option value="2">M</option>
                                    <option value="3">L</option>
                                    <option value="3">XL</option>
                                    <option value="3">XXL</option>
                                </select>
                                <InputCounter @input="receiveInputCounter" :count="0" class="ms-xl-3"/>
                                <button class="btn btn-dark px-3 py-2 rounded-0 ms-3 col-2" type="button">DELETE</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>

import InputCounter from "@/components/InputCounter.vue";

const receiveInputCounter = (count) => {
    console.log(count);
}
</script>
