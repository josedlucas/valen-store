<template>
    <section class="h-xl-75 h-xxl-85" id="section1">
        <carousel v-bind="carouselSettingsAbout">
            <slide v-for="slide in 1" :key="slide">
                <div>
                    <img class="d-md-block d-xxl-block d-lg-block d-none w-100" src="../../../valenweb/assets/images/about-us/section1/img.png" />
                    <img class="d-md-none d-xxl-none d-lg-none d-block w-100" src="../../../valenweb/assets/images/about-us/section1/img_m.png" />
                    <div class="container-xl mt-xl-n22 pb-xl-13 px-xl-5 mt-n23 pb-13 text-start">
                        <p class="text-warning fw-lighter raya-b d-grid fs-xl-12 fs-xxl-16 fs-11">NOSOTROS</p>
                        <p class="text-white fw-lighter mt-lg-3 mt-md-3 fs-xl-18 fs-12">
                            Hace 7 años, un emprendedor visionario identificó una necesidad <br class="d-lg-block d-none" />
                            creciente en la zona de Neuquén Capital:
                        </p>
                        <h1 class="text-warning fw-lighter fs-xl-42 fs-30 mt-4">
                            LA FATAL DE UNA CASA DE <br class="d-lg-block d-none" />
                            SEGURIDAD INDUSTRIAL <br class="d-lg-block d-none" />
                            CONFIABLE.
                        </h1>
                        <p class="text-white mt-lg-4 mt-md-4 fw-lighter fs-xl-18 fs-12 mt-4">
                            Con determinación y visión, fundó Valen Indumentaria Industrial <br class="d-lg-block d-none" />
                            con el objetivo de proporcionar soluciones integrales en seguridad <br class="d-lg-block d-none" />
                            laboral para las empresas locales.
                        </p>
                        <div class="mt-lg-5 mt-md-5 mt-10 d-flex justify-content-center justify-content-md-start">
                            <RouterLink :to="{ name: 'contact.index' }" class="btn btn-warning">CONTÁCTANOS</RouterLink>
                        </div>
                    </div>
                </div>
            </slide>
        </carousel>
    </section>
    <section class="pb-xl-3 pt-xl-0" id="section2">
        <img class="w-100 mt-xl-n6 mt-xxl-n14 d-md-block d-none" src="../../../valenweb/assets/images/about-us/section2/background.svg" />
        <img class="w-100 mt-xl-n6 mt-xxl-n14 mt-n13 d-md-none d-block" src="../../../valenweb/assets/images/about-us/section2/background-m.svg" />
        <div class="container-xl mx-auto row mt-xl-n24 mt-xxl-n25 mt-n37">
            <div class="col-lg-5 col-md-5 col-xxl-6 col-xl-6 ps-xl-7 order-md-0 order-1">
                <img class="w-xxl-60 w-xl-75 w-70 d-none d-md-block" src="../../../valenweb/assets/images/about-us/section2/img.png" /><img class="w-xxl-60 w-xl-75 w-70 mx-auto d-md-none d-block mt-4" src="../../../valenweb/assets/images/about-us/section2/img.png" />
                <RouterLink :to="{ name: 'public-products.index' }" class="btn btn-outline-dark rounded-0 mt-lg4 mt-md-4 mt-4 d-md-none d-block">CATÁLOGO DE PRODUCTOS</RouterLink>
            </div>
            <div class="col-lg-7 col-md-7 col-xxl-6 col-xl-6 d-flex align-items-center order-md-1 order-0">
                <div>
                    <h6 class="fw-light fs-xl-23 fs-xxl-28 fs-20">NUESTROS PRODUCTOS</h6>
                    <p class="fw-light my-3 lh-xl-3 fs-xl-15 fs-xxl-15 lh-xxl-4 mt-xl-3 fs-13">
                        Desde entonces, hemos crecido y diversificado nuestros servicios para ofrecerles una amplia selección de Elementos de Protección Personal, Calzado de Seguridad y Ropa de Trabajo de marcas reconocidas en el
                        mercado. Desde Guantes y Anteojos de protección hasta botas de seguridad certificadas y ropa de trabajo duradera, nuestra variedad de productos garantiza que encuentres exactamente lo que necesitás para proteger
                        a tus trabajadores y cumplir con las normativas de seguridad laboral.
                    </p>
                    <h3 class="fw-light lh-xl-3 fs-xl-25 fs-25 lh-3">
                        EL OBJETIVO DE PROPORCIONAR <br class="d-md-block d-none" />
                        SOLUCIONES INTEGRALES EN SEGURIDAD <br class="d-md-block d-none" />
                        LABORAL PARA LAS EMPRESAS LOCALES.
                    </h3>
                    <RouterLink :to="{ name: 'public-products.index' }"  class="btn btn-outline-dark rounded-0 mt-lg-4 mt-md-4 mt-4 d-md-inline-block d-none">CATÁLOGO DE PRODUCTOS</RouterLink>
                </div>
            </div>
        </div>
    </section>
    <section id="section3">
        <div class="container-xl mt-xl-13 mb-xl-6 mt-13">
            <h4 class="text-center fw-light fs-xl-24 fs-xxl-28 fs-24">MARCAS CON LAS QUE TRABAJAMOS</h4>
            <div class="row justify-content-center mt-xl-4">
                <div class="col-lg-2 col-md-2 col-sm-4 col-4 mt-lg-5 mt-5 mt-md-5 align-items-center d-flex justify-content-center"><img class="w-100" src="../../../valenweb/assets/images/about-us/section3/slider/slider-9.png" /></div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-4 mt-lg-5 mt-5 mt-md-5 align-items-center d-flex justify-content-center"><img class="w-100" src="../../../valenweb/assets/images/about-us/section3/slider/slider-8.png" /></div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-4 mt-lg-5 mt-5 mt-md-5 align-items-center d-flex justify-content-center"><img class="w-55" src="../../../valenweb/assets/images/about-us/section3/slider/slider-7.png" /></div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-4 mt-lg-5 mt-5 mt-md-5 align-items-center d-flex justify-content-center"><img class="w-70" src="../../../valenweb/assets/images/about-us/section3/slider/slider-6.png" /></div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-4 mt-lg-5 mt-5 mt-md-5 align-items-center d-flex justify-content-center"><img class="w-100" src="../../../valenweb/assets/images/about-us/section3/slider/slider-3.png" /></div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-2 col-md-2 col-sm-4 col-4 mt-lg-5 mt-5 mt-md-5 align-items-center d-flex justify-content-center"><img class="w-65" src="../../../valenweb/assets/images/about-us/section3/slider/slider-5.png" /></div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-4 mt-lg-5 mt-5 mt-md-5 align-items-center d-flex justify-content-center"><img class="w-85" src="../../../valenweb/assets/images/about-us/section3/slider/slider-4.png" /></div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-4 mt-lg-5 mt-5 mt-md-5 align-items-center d-flex justify-content-center"><img class="w-100" src="../../../valenweb/assets/images/about-us/section3/slider/slider-2.png" /></div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-4 mt-lg-5 mt-5 mt-md-5 align-items-center d-flex justify-content-center"><img class="w-50" src="../../../valenweb/assets/images/about-us/section3/slider/slider-1.png" /></div>
            </div>
        </div>
    </section>
    <section class="py-lg-3" id="section4">
        <img class="w-100 d-none d-md-block" src="../../../valenweb/assets/images/about-us/section4/background.svg" alt="" srcset="" /><img class="w-100 d-block d-md-none" src="../../../valenweb/assets/images/about-us/section4/background-m.svg" alt="" srcset="" />
        <div class="container-xl d-xl-flex mt-xl-n21 mt-xxl-n22 mt-n30 px-md-0 px-4">
            <div class="col-xl-5 align-items-center d-flex">
                <div>
                    <h6 class="fw-light fs-xl-24">NUESTRA MARCA</h6>
                    <p class="fw-light lh-xl-3 my-3 fs-xl-14 fs-13">
                        También nos enorgullece ofrecer una amplia variedad de productos bajo nuestra marca propia, Valen.NQN. Esta línea de productos, lanzada hace dos años, representa nuestra dedicación a la calidad y la innovación en
                        el campo de la seguridad laboral.
                        <br />
                        <br />
                        Nos especializamos en la fabricación de ropa de trabajo de primera calidad para proteger a tus trabajadores mientras ofrecen comodidad y durabilidad en cada jornada laboral. Desde camisas hasta pantalones de jean
                        y pantalones cargo reforzados, pasando por camperas térmicas, buzos y mamelucos, cada pieza está diseñada con meticulosa atención a la seguridad y el rendimiento.
                    </p>
                    <div class="mt-5 mb-4 d-flex justify-content-center justify-content-xl-start">
                        <RouterLink :to="{ name: 'public-products.index', query: { grouper: 1, category: 8}}" class="btn btn-warning rounded-0 mt-lg-4 mt-md-4">CONOCÉ VALEN.NQN</RouterLink>
                    </div>
                </div>
            </div>
            <div class="col-xl-7"><img class="offset-xl-3 mt-xl-n4 w-xl-90 w-xxl-85 w-100 mt-4" src="../../../valenweb/assets/images/about-us/section4/img.png" alt="" srcset="" /></div>
        </div>
    </section>
    <section class="py-lg-3" id="section5">
        <div class="container-xl mb-xl-7 mt-xl-9 mt-xxl-12 mt-10">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="bg-light px-xl-5 py-xl-6 me-xl-3 py-4 px-4">
                        <h6 class="fw-light fs-xl-35 fs-25">MISIÓN</h6>
                        <p class="fs-13">
                            Proteger y cuidar a los trabajadores en todos los entornos laborales mediante la provisión de productos de alta calidad y un servicio excepcional, cumpliendo con las normativas de seguridad y contribuyendo al
                            éxito de nuestros clientes.
                        </p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 px-lg-0 my-md-0 my-4">
                    <div class="bg-light px-xl-5 py-xl-6 ms-xl-3 py-4 px-4">
                        <h6 class="fw-light fs-xl-35 fs-25">VISIÓN</h6>
                        <p class="fs-13">
                            Convertirnos en el líder regional en seguridad laboral, ofreciendo soluciones innovadoras y personalizadas que garanticen la protección y el bienestar de los trabajadores, estableciendo estándares de
                            excelencia en la industria.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const carouselSettingsAbout = {
    itemsToShow: 1,
}
</script>
