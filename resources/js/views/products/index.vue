<template>
    <!--
    <div class="container">
        <h2 class="text-center my-4">Blog Posts</h2>
        <div class="row mb-2">
            <div v-for="product in products?.data" :key="product.id" class="col-md-6">
                <div
                    class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col-auto d-none d-lg-block d-md-block">
                        <img :src="getImageUrl(product)" class="img-fluid"/>
                    </div>
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong v-for="category in product.categories" class="d-inline-block mb-2 text-primary">
                            {{ category.name }}
                        </strong>
                        <h3 class="mb-0">{{ product.title }}</h3>
                        <div class="mb-1 text-muted">Nov 12</div>
                        <div class="card-text mb-auto" v-html="product.content.substring(0, 150) + '...'"></div>
                        <router-link :to="{ name: 'public-products.details', params: { id: product.id } }"
                                     class="stretched-link">Continue reading
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    -->
    <section id="section3Product">
        <div class="container col-md-9 col-10 mx-auto">
            <div class="mt-md-5">
                <h4 class="text-warning fs-7 fw-light">CATÁLOGO</h4>
                <div class="d-flex">
                    <a class="text-dark me-md-4" href="./products.html">
                        <span class="fs-xl-16">INDUMENTARIA DE TRABAJO</span>
                    </a>
                    <a class="text-dark me-md-4" href="./products.html">
                        <span class="fs-xl-16">CALZADO DE SEGURIDAD</span>
                    </a>
                    <a class="text-dark me-md-4" href="./products.html">
                        <span class="fs-xl-16">PROTECCIÓN PERSONAL</span>
                    </a>
                </div>
            </div>
            <div class="row py-lg-5 py-5">
                <div class="col-lg-3 col-sm-6 mb-4" v-for="product in products?.data" :key="product.id">
                    <RouterLink :to="{ name: 'public-products.details', params: { id: product.id } }" class="card bg-transparent border-0 text-style-none">
                        <img class="rounded-2" :src="getImageUrl(product)"  alt="..." />
                        <div class="card-body pt-2 ps-2">
                            <small class="fs-xl-14" v-for="category in product.categories">{{ category.name }}</small>
                            <h5 class="mt-lg-1 card-title font-size-lg-22 font-size-md-21 fw-light" style="text-transform: uppercase;">{{ product.title }}</h5>
                        </div>
                    </RouterLink>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios';
import {ref, onMounted} from 'vue'

const products = ref();

function getImageUrl(product) {
    let image
    if (product.resized_image.length > 0) {
        image = product.resized_image
    } else {
        image = product.original_image
    }
    return new URL(image, import.meta.url).href
}

onMounted(() => {
    axios.get('/api/get-products').then(({data}) => {
        products.value = data;
    })
})
</script>
