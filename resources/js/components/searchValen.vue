<template>
    <div class="position-relative">
        <div>
            <input type="text" class="form-control rounded-0" v-model="search" @keyup="searchProduct" placeholder="Buscar...">
            <span class="close" @click="close">X</span>
        </div>
        <div v-if="products.length > 0 " class="bg-white px-2 position-absolute w-100 mt-n1 border-search-box pb-3" style="top: 100%;">
            <RouterLink :to="`/products/${product.id}`" @click="close" v-for="product in products" class="px-1 d-flex pt-3 text-dark">
                <img :src="product.original_image" width="40" height="40" class="rounded-3" alt="">
                <div class="ms-3">
                    <h6 class="mb-0 fs-14">{{ product.title }}</h6>
                    <div class="text-muted fs-10 lh-1 mt-0">{{ product.categories[0].name }}</div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'

let search = ref('')
let products = ref([])
const emit = defineEmits(['close'])
const searchProduct = () => {
    if (search.value.length < 2){
        products = []
        return
    }
    let spiner = `<div class="spinner-border spinner-border-sm" role="status"> <span class="visually-hidden">Loading...</span> </div>`;

    document.querySelector('.close').innerHTML = spiner
    axios.get('/api/products/search/' + search.value)
        .then(({data}) => {
            products = data.data;
            document.querySelector('.close').innerHTML = 'X'
        })
}

const close = () => {
    search.value = ''
    emit('close', false)
}
</script>

<style>
    .border-search-box{
        box-shadow: inset 0px -1px 0px #9f9e9e, /* Borde interno inferior */
        inset 1px 0px 0px #9f9e9e,  /* Borde interno derecho */
        inset -1px 0px 0px #9f9e9e; /* Borde interno izquierdo */
        z-index: 1;
    }
    input{
        box-shadow: inset 0px .5px 0px #9f9e9e, /* Borde interno superior */
        inset .5px 0px 0px #9f9e9e, /* Borde interno derecho */
        inset -.5px 0px 0px #9f9e9e; /* Borde interno izquierdo */
    }
    .close {
        position: absolute;
        margin-top: -32.5px;
        cursor: pointer;
        background: #ffffff;
        padding: 2px 4px;
        right: 1px;
    }
</style>
