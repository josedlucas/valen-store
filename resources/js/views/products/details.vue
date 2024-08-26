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
                <form  @submit.prevent="submitForm" class="col-lg-6 ps-lg-5" >
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
                    <div class="pt-3 d-flex">
                        <div v-for="(color, index) in product?.colors" class="me-2">
                            <input :value="color.id" class="btn-check" :id="`color${color.id}`" type="radio" name="color" autocomplete="off" v-model="productPost.color_id"  />
                            <label class="p-3 btn me-2" :style="`background-color: ${color.code};`" :for="`color${color.id}`"></label>
                        </div>
                    </div>
                    <small class="text-danger mt-1 d-block">
                        {{ errors.color_id }}
                    </small>
                    <div class="pt-3 d-flex flex-wrap">
                        <div v-for="size in product?.sizes" class="me-2">
                            <input :value="size.id" class="btn-check" :id="`size${size.name}`" type="radio" name="size" autocomplete="off" v-model="productPost.size_id" />
                            <label class="btn me-2 btn-outline-dark btn-sm" :for="`size${size.name}`">{{size.name}}</label>
                        </div>
                    </div>
                    <small class="text-danger mt-1">
                        {{ errors.size_id }}
                    </small>
                    <div class="pt-1 pb-4 pt-3">
                        <a class="text-muted" href="" data-bs-toggle="modal" data-bs-target="#modalDeMedidas">
                            <img src="../../../valenweb/assets/images/icons/regla.svg" />
                            <span class="ms-md-3">Guía de Tallas</span>
                        </a>
                    </div>
                    <div class="d-flex">
                        <InputCounter @input="receiveInputCounter" :count="1"/>
                        <button class="btn btn-warning px-3 py-2 rounded-0 ms-md-3" type="submit">
                            <span  v-if="isLoading">Processing...</span>
                            <span v-else>AGREGAR AL CARRITO</span>
                        </button>
                    </div>
                </form>
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
                                <div class="fs-6 fw-light" style="text-transform: uppercase;">{{ product?.title }}</div>
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
import {nextTick, onMounted, reactive, ref, watch} from 'vue'
import axios from 'axios';
import { useRoute } from "vue-router";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel';
import useCar from "@/composables/car";
import InputCounter from "@/components/InputCounter.vue";
import {useForm, useField, defineRule} from "vee-validate";
import {required} from "@/validation/rules"

defineRule('required', required)

const { car, getCar, addToCar, isLoading } = useCar();

const currentSlide = ref(0)
const zoomImages = ref([])
const route = useRoute()

const schema = {
    product_id: 'required',
    total_product: 'required',
    size_id: 'required',
    color_id: 'required',
}

// Create a form context with the validation schema
const {validate, errors} = useForm({validationSchema: schema});

// alert validate swa validate and errors


// Define actual fields for validation
const {value: product_id} = useField('product_id', null, {initialValue: parseInt(route.params.id)});
const {value: total_product} = useField('total_product', null, {initialValue: 1});
const {value: color_id} = useField('color_id', null, {initialValue: '', label: 'color'});
const {value: size_id} = useField('size_id', null, {initialValue: '', label: 'size'});

const productPost = reactive({
    product_id,
    total_product,
    color_id,
    size_id
})

function submitForm() {
    validate().then(form => {
        if (form.valid) addToCar(productPost)
    })
}


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
    productPost.total_product = count
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
const colors = ref({});
const sizes = ref({});


onMounted( () => {
    axios.get('/api/get-product/' + route.params.id).then(({data}) => {
        product.value = data;
    })
    axios.get('/api/category-list').then(({data}) => {
        categories.value = data.data;
    })
    axios.get('/api/color-list').then(({data}) => {
        categories.value = data.data;
    })
    axios.get('/api/size-list').then(({data}) => {
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
