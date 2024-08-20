<template>
    <section id="section1ProductDetail">
        <div class="container col-xl-9 mx-xl-auto">
            <div class="row py-5">
                <div class="col-lg-6">
                    <carousel id="gallery" v-bind="carouselSettingsProductDetail" v-model="currentSlide">
                        <slide class="carousel__item zoom-container" v-for="(slide, index) in product?.media" :key="slide"  @mousemove="handleMouseMove" @mouseleave="resetZoom">
                            <img :src="slide?.original_url ?? ''" class="img-width-100 rounded-3 zoom-image" :ref="setZoomImageRef(index)" />
                        </slide>
                    </carousel>
                    <carousel id="thumbnails" v-bind="carouselSettingsProductDetailThumbnails" v-model="currentSlide" ref="carousel" class="thumbnail mt-xl-3">
                        <slide  v-for="(slide, index) in product?.media" :key="slide">
                            <img :src="slide.original_url ?? ''"  class="w-xl-70 w-50 rounded-2" @click="changeSlide(index)" >
                        </slide>
                    </carousel>
                </div>
                <div class="col-lg-6 ps-lg-5" >
                    <div class="pt-lg-2 pt-4">
                        <span class="font-size-14" v-for="category in product?.categories">{{ category.name }}</span>
                        <h1 class="fs-xl-35 fw-light">{{ product?.title }}</h1>
                    </div>
                    <div class="pt-lg-4 pt-4 pb-xl-5">
                        <span class="font-size-14">DESCRIPCIÓN DEL PRODUCTO</span>
                        <h4 class="mt-2 pt-2 fs-xl-18" v-html="product?.content">
                        </h4>
                    </div>
                    <span class="font-size-14">ESPECIFICACIONES</span>
                    <div class="py-3">
                        <input class="btn-check" id="colorOrange" type="radio" name="color" autocomplete="off" />
                        <label class="p-3 btn bg-orange me-2" for="colorOrange"></label>
                        <input class="btn-check" id="colorBlue" type="radio" name="color" autocomplete="off" />
                        <label class="p-3 btn bg-blue me-2" for="colorBlue"></label>
                        <input class="btn-check" id="colorBrown" type="radio" name="color" autocomplete="off" />
                        <label class="p-3 btn bg-brown me-2" for="colorBrown"></label>
                        <input class="btn-check" id="colorRed" type="radio" name="color" autocomplete="off" />
                        <label class="p-3 btn bg-red" for="colorRed"></label>
                    </div>
                    <div class="py-3 d-flex flex-wrap">
                        <input class="btn-check" id="sizeS" type="radio" name="size" autocomplete="off" />
                        <label class="btn me-2 btn-outline-dark btn-sm" for="sizeS">S</label>
                        <input class="btn-check" id="sizeM" type="radio" name="size" autocomplete="off" />
                        <label class="btn me-2 btn-outline-dark btn-sm" for="sizeM">M</label>
                        <input class="btn-check" id="sizeL" type="radio" name="size" autocomplete="off" />
                        <label class="btn me-2 btn-outline-dark btn-sm" for="sizeL">L</label>
                        <input class="btn-check" id="sizeXL" type="radio" name="size" autocomplete="off" />
                        <label class="btn me-2 btn-outline-dark btn-sm" for="sizeXL">XL</label>
                        <input class="btn-check" id="sizeXXL" type="radio" name="size" autocomplete="off" />
                        <label class="btn me-2 btn-outline-dark btn-sm" for="sizeXXL">XXL</label>
                        <input class="btn-check" id="sizeXXXL" type="radio" name="size" autocomplete="off" />
                        <label class="btn me-2 btn-outline-dark btn-sm" for="sizeXXXL">XXXL</label>
                        <input class="btn-check" id="sizeXXXXL" type="radio" name="size" autocomplete="off" />
                        <label class="btn btn-outline-dark btn-sm" for="sizeXXXXL">XXXXL</label>
                    </div>
                    <div class="pt-1 pb-4">
                        <a class="text-muted" href="" data-bs-toggle="modal" data-bs-target="#modalDeMedidas">
                            <img src="../../../valenweb/assets/images/icons/regla.svg" />
                            <span class="ms-md-3">Guía de Talles</span>
                        </a>
                    </div>
                    <div class="d-flex">
                        <InputCounter @input="receiveInputCounter" :count="0"/>
                        <button class="btn btn-warning px-3 py-2 rounded-0 ms-md-3" type="button">AGREGAR AL CARRITO</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="modal fade" id="modalDeMedidas" tabindex="-1" aria-labelledby="modalDeMedidasLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content rounded-0">
                <div class="modal-body">
                    <div class="modal-header">
                        <div class="d-flex align-items-center mx-auto">
                            <div class="text-center">
                                <div class="fs-6 fw-light">MAMELUCO {{ product?.title }}</div>
                                <p class="fw-light">Medidas referenciales en cm</p>
                            </div>
                            <button class="btn-close position-absolute" type="button" data-bs-dismiss="modal" aria-label="Close" style="right: 3rem;"></button>
                        </div>
                    </div>
                    <table class="table table-hover">
                        <thead>
                        <tr>
                            <th class="text-center">Talle</th>
                            <th>XS</th>
                            <th>S</th>
                            <th>M</th>
                            <th>L</th>
                            <th>XL</th>
                            <th>XXL</th>
                            <th>XXXL</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="text-center">Ancho de pecho</td>
                            <td>52</td>
                            <td>54</td>
                            <td>56</td>
                            <td>58</td>
                            <td>62</td>
                            <td>64</td>
                            <td>66</td>
                        </tr>
                        <tr>
                            <td class="text-center">Ancho cadera</td>
                            <td>52</td>
                            <td>54</td>
                            <td>56</td>
                            <td>58</td>
                            <td>62</td>
                            <td>64</td>
                            <td>66</td>
                        </tr>
                        <tr>
                            <td class="text-center">Largo total</td>
                            <td>52</td>
                            <td>54</td>
                            <td>56</td>
                            <td>58</td>
                            <td>62</td>
                            <td>64</td>
                            <td>66</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {nextTick, onMounted, ref, watch} from 'vue'
import axios from 'axios';
import { useRoute } from "vue-router";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel';
import InputCounter from "@/components/InputCounter.vue";

const currentSlide = ref(0)
const zoomImages = ref([])

const carouselSettingsProductDetailThumbnails = {
    snapAlign: 'center',
    wrapAround: true,
    breakpoints: {
        0:{
            itemsToShow: 3
        },
        768:{
            itemsToShow: 5
        }
    }
}



const carouselSettingsProductDetail = {
    itemsToShow: 1,
    snapAlign: 'center',
    wrapAround: false
}

const receiveInputCounter = (count) => {
    console.log(count)
}

function changeSlide(index) {
    currentSlide.value = index
}

function setZoomImageRef(index) {
    return el => {
        if (el) zoomImages.value[index] = el
    }
}

function handleMouseMove(e) {
    const zoomElement = zoomImages.value[currentSlide.value]
    if (!zoomElement) return

    const rect = zoomElement.getBoundingClientRect()
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top

    const xPercent = (offsetX / rect.width) * 100
    const yPercent = (offsetY / rect.height) * 100

    zoomElement.style.transformOrigin = `${xPercent}% ${yPercent}%`
    zoomElement.style.transform = 'scale(3)'  // Ajusta el nivel de zoom
}

function resetZoom() {
    const zoomElement = zoomImages.value[currentSlide.value]
    if (zoomElement) {
        zoomElement.style.transform = 'scale(1)'
        zoomElement.style.transformOrigin = 'center center'
    }
}


const product = ref({});
const categories = ref({});
const route = useRoute()

onMounted( () => {
    axios.get('/api/get-product/' + route.params.id).then(({data}) => {
        product.value = data;
    })
    axios.get('/api/category-list').then(({data}) => {
        categories.value = data.data;
    })
})


</script>

<style>
.carousel-wrapper {
    position: relative;
}

.zoom-container {
    overflow: hidden;
    position: relative;
}

.zoom-image {
    transition: transform 0.3s ease;
    width: 100%;
    height: auto;
    display: block;
}
</style>
