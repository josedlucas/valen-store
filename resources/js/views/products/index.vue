<template>
    <section id="section3Product">
        <div class="container col-md-9 col-10 mx-auto">
            <div class="mt-md-5">
                <h4 class="text-warning fs-7 fw-light d-flex align-items-center">
                    {{
                        categoryList.find(category => category.id === params.category)?.name ??
                        categorygrouperList.find(categorygrouper => categorygrouper.id === params.grouper)?.name ??
                        'CATÁLOGO'
                    }}
                    <div class="ms-3 clean" v-if="params.grouper && !params.category" @click="deleteParams('grouper')">
                        <svg fill="#b0b0b0" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#b0b0b0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_6_"> <g id="XMLID_11_"> <path d="M240,121.076H30V275c0,8.284,6.716,15,15,15h60h37.596c19.246,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105 C330,172.195,290.816,128.377,240,121.076z M225,300c-41.355,0-75-33.645-75-75s33.645-75,75-75s75,33.645,75,75 S266.355,300,225,300z"></path> </g> <g id="XMLID_18_"> <path d="M240,90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v45H45 H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15H240z M90,30h90v30h-15h-60H90V30z"></path> </g> <g id="XMLID_23_"> <path d="M256.819,193.181c-5.857-5.858-15.355-5.858-21.213,0L225,203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213,0 c-5.858,5.858-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394L225,246.213l10.606,10.606 c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.465,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L246.213,225 l10.606-10.606C262.678,208.535,262.678,199.039,256.819,193.181z"></path> </g> </g> </g></svg>
                    </div>
                    <div class="ms-3 clean" v-if="params.category" @click="deleteParams('category')">
                        <svg fill="#b0b0b0" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#b0b0b0"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_6_"> <g id="XMLID_11_"> <path d="M240,121.076H30V275c0,8.284,6.716,15,15,15h60h37.596c19.246,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105 C330,172.195,290.816,128.377,240,121.076z M225,300c-41.355,0-75-33.645-75-75s33.645-75,75-75s75,33.645,75,75 S266.355,300,225,300z"></path> </g> <g id="XMLID_18_"> <path d="M240,90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v45H45 H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15H240z M90,30h90v30h-15h-60H90V30z"></path> </g> <g id="XMLID_23_"> <path d="M256.819,193.181c-5.857-5.858-15.355-5.858-21.213,0L225,203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213,0 c-5.858,5.858-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394L225,246.213l10.606,10.606 c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.465,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L246.213,225 l10.606-10.606C262.678,208.535,262.678,199.039,256.819,193.181z"></path> </g> </g> </g></svg>
                    </div>
                </h4>

                <div>
                    <RouterLink v-for="grouper in categorygrouperList" :key="grouper.id" :to="{ query: { grouper: grouper.id } }" class="text-dark me-md-4" v-if="!params.grouper && !params.category">
                        <span class="fs-xl-16">{{ grouper.name }}</span>
                    </RouterLink>

                    <RouterLink v-for="category in categoryList" :key="category.id" :to="{ query: { ...route.query, category: category.id } }" class="text-dark me-md-4" v-if="!params.category && params.grouper">
                        <span class="fs-xl-16">{{ category.name }}</span>
                    </RouterLink>
                </div>
            </div>
            <div class="row py-lg-5 py-5">
                <div class="col-lg-3 col-sm-6 mb-4" v-for="product in products?.data" :key="product.id">
                    <RouterLink :to="{ name: 'public-products.details', params: { id: product.id } }" class="card bg-transparent border-0 text-style-none">
                        <img class="rounded-2" :src="getImageUrl(product)" alt="..." />
                        <div class="card-body pt-2 ps-2">
                            <small class="fs-xl-14" v-for="category in product.categories" :key="category.id">{{ category.name }}</small>
                            <h5 class="mt-lg-1 card-title font-size-lg-22 font-size-md-21 fw-bold" style="text-transform: uppercase;">{{ product.title }}</h5>
                        </div>
                    </RouterLink>
                </div>
                <div class="col-lg-12 col-sm-12 mb-4" v-if="products?.data.length === 0">
                    <h3>No hay productos</h3>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted, computed, watch } from 'vue';
import useCategoryGroupers from "@/composables/categorygroupers";
import useCategories from "@/composables/categories";
import { useRoute, useRouter } from 'vue-router';

const { categorygrouperList, getCategoryGrouperList } = useCategoryGroupers();
const { categoryList, getCategoryList } = useCategories();
const route = useRoute();
const router = useRouter();

const products = ref();
const params = ref({});

const getImageUrl = (product) => {
    return product.resized_image?.length > 0
        ? new URL(product.resized_image, import.meta.url).href
        : new URL(product.original_image, import.meta.url).href;
};

const updateParams = (data) => {
    router.push({ query: { ...route.query, ...data } });
};

const deleteParams = (filter) => {
    const newQuery = { ...route.query };
    delete newQuery[filter];
    router.push({ query: newQuery });
};

const getProducts = async () => {
    const { data } = await axios.get('/api/get-products', { params: params.value });
    products.value = data;
};

watch(
    () => route.query,
    async (newQuery) => {
        params.value.grouper = newQuery.grouper ? parseInt(newQuery.grouper) : null;
        params.value.category = newQuery.category ? parseInt(newQuery.category) : null;
        await getCategoryList(params.value);
        await getProducts();
    },
    { immediate: true }
);

onMounted(async () => {
    await getCategoryList();
    await getCategoryGrouperList();
});
</script>

<style>
.clean {
    cursor: pointer;
}
</style>
