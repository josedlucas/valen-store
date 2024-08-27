<template>
    <section id="section1">
        <carousel v-bind="carouselSettingsHome">
            <slide v-for="slide in 1" :key="slide">
                <div>
                    <img class="d-md-block d-xxl-block d-lg-block d-none w-100" src="../../../valenweb/assets/images/home/section1/img.png" />
                    <img class="d-md-none d-xxl-none d-lg-none d-block w-100" src="../../../valenweb/assets/images/home/section1/img_m.png" />
                    <div class="mt-xl-n18 pb-xl-20 mt-xxl-n19 mt-n16 pb-11">
                        <h1 class="text-warning text-center fw-bold font-size-xxxl-55 fs-xl-45 fs-33">
                            ROPA DE <br class="d-md-none d-xxl-none d-lg-none" />
                            SEGURIDAD
                        </h1>
                        <div class="justify-content-center d-flex mt-md-5 mt-xxl-5 mt-lg-5 mt-4">
                            <RouterLink :to="{name: 'public-products.index'}" class="btn btn-warning">VER CATÁLOGO</RouterLink>
                        </div>
                    </div>
                </div>
            </slide>
        </carousel>
    </section>
    <section class="py-md-3 py-xxl-3 py-lg-3" id="section2">
        <img class="w-100 mt-xl-n23 mt-n7" src="../../../valenweb/assets/images/home/section2/background.svg" />
        <div class="container-xl mt-xl-n14 pb-xl-6 mt-n7">
            <carousel v-bind="carouselSettingsSection2">
                <slide v-for="slide in slidersSection2" :key="slide" >
                    <RouterLink :to="{ name: 'public-products.index', query: { grouper: slide.grouper }}" :class="'item align-items-center  d-flex m-4 m-md-auto m-xxl-auto m-lg-auto position-relative '+slide.class" href="">
                        <img :src="slide.image" class="w-xl-85 w-100 mx-auto"/>
                        <div class="hover-content" style="display: none;">
                            <img :src="slide.imageTop" class="w-xl-30 mx-auto"/>
                            <h6 class="text-warning fs-3">{{ slide.title }}</h6>
                        </div>
                    </RouterLink>
                </slide>
                <template #addons>
                    <Pagination />
                </template>
            </carousel>
        </div>
    </section>
    <section class="py-md-3 py-xxl-3 py-lg-3 pb-5" id="section3">
        <div class="container-xl">
            <div class="row">
                <div class="col-md-6 col-xxl-6 col-lg-6 d-flex justify-content-end">
                    <img class="w-xl-100 w-xxl-100 w-100 d-md-block d-none" src="../../../valenweb/assets/images/home/section3/img.png" /><img class="w-xl-100 w-xxl-100 w-100 d-md-none d-block mt-5" src="../../../valenweb/assets/images/home/section3/img_m.png" />
                </div>
                <div class="col-md-6 col-xxl-6 col-lg-6 pt-md-5 pt-xxl-5 pt-lg-5 col-10 mx-auto pt-4">
                    <h3 class="text-warning fw-lighter fs-xl-35 fs-35">
                        ¿Cómo nace Valen <br class="d-md-block d-xxl-block d-lg-block d-none" />
                        Indumentaria?
                    </h3>
                    <p class="text-white fs-xl-18 mt-xl-4 mt-4">
                        Hace 7 años, un emprendedor visionario identificó una <br class="d-md-block d-xxl-block d-lg-block d-none" />
                        necesidad creciente en la zona de Neuquén Capital:
                    </p>
                    <h5 class="text-warning fs-xl-25 my-xl-4 fs-18 my-4">
                        La falta de una casa de<br class="d-md-none d-xxl-none d-lg-none d-block" />
                        seguridad <br class="d-md-block d-xxl-block d-lg-block d-none" />
                        industrial confiable.
                    </h5>
                    <p class="text-white fs-xl-18">
                        Con determinación y visión, fundó Valen Indumentaria <br class="d-md-block d-xxl-block d-lg-block d-none" />
                        Industrial con el objetivo de proporcionar soluciones <br class="d-md-block d-xxl-block d-lg-block d-none" />
                        integrales en seguridad laboral para las empresas locales.
                    </p>
                    <RouterLink :to="{name: 'about.index'}" class="btn btn-warning rounded-0 my-xxxl-4">CONOCER MÁS</RouterLink>
                </div>
            </div>
        </div>
    </section>
    <section class="py-md-3 py-xxl-3 py-lg-3" id="section4">
        <img class="w-100 d-md-block d-none" src="../../../valenweb/assets/images/home/section4/background.svg" /><img class="w-100 d-md-none d-block" src="../../../valenweb/assets/images/home/section4/background-m.svg" />
        <div class="container-xl mt-xl-n18 mt-xl-n19 mt-n24 col-10 mx-auto col-xl">

            <carousel v-bind="carouselSettingsSection4">
                <slide v-for="slide in slidersSection4" :key="slide" >
                    <div class="row">
                        <div class="col-md-6 pe-xl-6 pt-xl-5 text-start">
                            <h3 class="text-white fw-lighter fs-xl-16 fs-16"> {{ slide.count }}</h3>
                            <img class="w-10 my-4" src="../../../valenweb/assets/images/home/section4/comillas.svg" />
                            <p class="text-white text-justify fs-xl-20 fw-lighter fs-14">
                                {{ slide.description }}
                            </p>
                            <p class="text-warning font-size-xxxl-20">{{ slide.name}}</p>
                        </div>
                        <div class="col-md-6">
                            <img class="w-xl-80 mt-xl-n2 w-100" :src="slide.image" />
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
    </section>
    <section class="py-xl-10 py-0" id="section5">
        <div class="container-xl bg-white rounded-0 pt-xl-3 px-0 pb-xl-6 pb-6 pt-5 rounded-md-4">
            <div class="d-grid pt-xl-3 pb-md-3 pb-xxl-3 pb-lg-3 pb-xxxl-5 pt-6 pb-4">
                <h6 class="fs-2 text-center mx-auto z-1 bg-white px-xl-4 mb-xxl-0 fs-xl-24 fs-20" style="width: fit-content;">Marcas con las que trabajamos</h6>
                <img class="w-100 z-n1 mt-md-n4 mt-xxl-n4 mt-lg-n4 mb-md-5 mb-xxl-5 mb-lg-5 z-0 d-none d-md-block" src="../../../valenweb/assets/images/home/section5/raya.svg" />
            </div>
            <carousel v-bind="carouselSettingsSection5">
                <slide v-for="slide in slidersSection5" :key="slide" >
                    <img :src="slide.image" class="w-90" />
                </slide>
            </carousel>
        </div>
    </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const carouselSettingsHome = {
    itemsToShow: 1,
    snapAlign: 'center',
}
// slider section 2
import imagesTop1 from '../../../valenweb/assets/images/home/section2/icono-chaleco.svg';
import imagesTop2 from '../../../valenweb/assets/images/home/section2/icono-bota.svg';
import imagesTop3 from '../../../valenweb/assets/images/home/section2/icono-lente.svg';
import image1 from '../../../valenweb/assets/images/home/section2/img.png';
import image2 from '../../../valenweb/assets/images/home/section2/img_1.png';
import image3 from '../../../valenweb/assets/images/home/section2/img_2.png';

// Slider section 4
import tstImage from '../../../valenweb/assets/images/home/section4/slider/img.png';

// Slider section 5
import markImage from '../../../valenweb/assets/images/home/section5/slider/img.png';
import markImage1 from '../../../valenweb/assets/images/home/section5/slider/img_1.png'
import markImage2 from '../../../valenweb/assets/images/home/section5/slider/img_2.png'
import markImage3 from '../../../valenweb/assets/images/home/section5/slider/img_3.png'
import markImage4 from '../../../valenweb/assets/images/home/section5/slider/img_4.png'
import markImage5 from '../../../valenweb/assets/images/home/section5/slider/img_5.png'
import markImage6 from '../../../valenweb/assets/images/home/section5/slider/img_6.png'


const slidersSection2 = [
    {
        imageTop: imagesTop2,
        image: image1,
        title: 'CALZADO',
        class: 'hover-action-1',
        grouper: 4
    },
    {
        imageTop: imagesTop1,
        image: image2,
        title: 'INDUMENTARIA',
        class: 'hover-action-2',
        grouper: 1
    },
    {
        imageTop: imagesTop3,
        image: image3,
        title: 'PROTECCÍON',
        class: 'hover-action-3',
        grouper: 5
    }
]
const carouselSettingsSection2 = {
    transition: '1500',
    autoplay: 3000,
    pauseAutoplayOnHover: true,
    breakpoints: {
        0: {
            itemsToShow: 1,
            wrapAround: true
        },
        768: {
            itemsToShow: 3,
            wrapAround: false,
            pagination: true
        }
    }
}

const slidersSection4 = [
    {
        count: 'TESTIMONIOS 1 / 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum nisi sit amet dolor accumsan luctus. In id tempus lorem, lacinia blandit urna. Etiam at ipsum molestie, porta elit quis, fermentum erat. Aliquam in massa pellentesque, commodo odio non.',
        image: tstImage,
        name: 'Nombre de cliente, nombre empresa'
    },
    {
        count: 'TESTIMONIOS 2 / 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum nisi sit amet dolor accumsan luctus. In id tempus lorem, lacinia blandit urna. Etiam at ipsum molestie, porta elit quis, fermentum erat. Aliquam in massa pellentesque, commodo odio non.',
        image: tstImage,
        name: 'Nombre de cliente, nombre empresa'
    },
    {
        count: 'TESTIMONIOS 3 / 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum nisi sit amet dolor accumsan luctus. In id tempus lorem, lacinia blandit urna. Etiam at ipsum molestie, porta elit quis, fermentum erat. Aliquam in massa pellentesque, commodo odio non.',
        image: tstImage,
        name: 'Nombre de cliente, nombre empresa'
    }
];
const carouselSettingsSection4 = {
    transition: '1500',
    itemsToShow: 1,
    wrapAround: false,
    autoplay: 3000
}


const slidersSection5 = [
    {
        image: markImage
    },
    {
        image: markImage1
    },
    {
        image: markImage2
    },
    {
        image: markImage3
    },
    {
        image: markImage4
    },
    {
        image: markImage5
    },
    {
        image: markImage6
    }
]
const carouselSettingsSection5 = {
    transition: '1500',
    wrapAround: false,
    autoplay: 3000,
    breakpoints: {
        0: {
            itemsToShow: 2
        },
        768: {
            itemsToShow: 5
        }
    }
}
</script>

<style scoped>
 section{
     background-color: #000000;
 }
 section.carousel{
     background-color: transparent;
 }
</style>
