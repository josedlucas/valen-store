<template>
    <div class="loader-container" style="display: none;">
        <div class="loader"></div>
    </div>
    <img class="d-md-block d-none" src="../../valenweb/assets/images/header/top-header.svg" alt="top header" style="width: 100%;" />
    <img class="d-md-none d-block" src="../../valenweb/assets/images/header/top-header-m.svg" alt="top header" style="width: 100%;" />
    <header class="align-items-center d-flex bg-black justify-content-center">
        <nav class="navbar navbar-expand-lg navbar-light container-xl">
            <!-- toggle in header only mobile-->
            <button class="navbar-toggler my-2 border-0 col-2" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <!-- menu in header only desktop left-->
            <div class="collapse navbar-collapse col-md-4" id="main_nav2">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'home' }" class="nav-link">HOME</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink  :to="{ name: 'about.index' }" class="nav-link">NOSOTROS</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'contact.index' }" class="nav-link">CONTACTO</RouterLink>
                    </li>
                </ul>
            </div>
            <!-- logo in header mobile and desktop-->
            <RouterLink :to="{ name: 'home' }" class="navbar-brand col-md-4 col-6 justify-content-center d-flex logo-background mx-0">
                <img class="logo" src="../../valenweb/assets/images/logo/logo.svg" alt="Logo" />
            </RouterLink>
            <!-- menu in header only mobile right-->
            <div class="col-md-4 d-flex d-md-none col-2 justify-content-end">
                <RouterLink :to="{ name: 'car.index' }" class="nav-link mx-auto d-block" href="./contact">
                    <img src="../../valenweb/assets/images/icons/car.svg" alt="Lupa" width="25px" height="25px" />
                    <span class="cart-number" v-if="cartCount" >{{cartCount}}</span>
                </RouterLink>
            </div>
            <!-- meno in mobile dropdown-->
            <div class="collapse col-md-4 d-md-none px-4 mt-4 ps-md-0 w-100" id="main_nav">
                <ul class="navbar-nav">
                    <li class="nav-item mt-4">
                        <SearchValen @close="toggleSearchEmit" class="animate" />
                    </li>
                    <li class="nav-item dropdown mt-4">
                        <a class="nav-link dropdown-toggle fs-16 d-flex" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>CALZADO DE SEGURIDAD</span>
                            <span class="ms-auto d-block">
                                <svg class="ms-auto" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.50012 1.36572L7.9906 7.85626L1.50012 14.3468" stroke="#FFCF2F" stroke-width="2"/>
                                </svg>
                            </span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end position-relative" aria-labelledby="navbarDropdown">
                            <div v-for="calzadoSeguridad in categoryList">
                                <li v-if="calzadoSeguridad.category_grouper_id.id === 4" >
                                    <RouterLink  to=""  @click="redirect({ name: 'public-products.index', query: { grouper: calzadoSeguridad.category_grouper_id.id, category: calzadoSeguridad.id }})" class="dropdown-item fw-lighter">{{ calzadoSeguridad.name }}</RouterLink>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle fs-16 d-flex" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>ROPA DE TRABAJO</span>
                            <span class="ms-auto d-block">
                                <svg class="ms-auto" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.50012 1.36572L7.9906 7.85626L1.50012 14.3468" stroke="#FFCF2F" stroke-width="2"/>
                                </svg>
                            </span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end position-relative" aria-labelledby="navbarDropdown">
                            <div v-for="ropaTrabajo in categoryList">
                                <li v-if="ropaTrabajo.category_grouper_id.id === 1" >
                                    <RouterLink to="" @click="redirect({ name: 'public-products.index', query: { grouper: ropaTrabajo.category_grouper_id.id, category: ropaTrabajo.id }})" class="dropdown-item">{{ ropaTrabajo.name }}</RouterLink>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle fs-16 d-flex" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>PROTECCION PERSONAL</span>
                            <span class="ms-auto d-block">
                                <svg class="ms-auto" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.50012 1.36572L7.9906 7.85626L1.50012 14.3468" stroke="#FFCF2F" stroke-width="2"/>
                                </svg>
                            </span>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end position-relative" aria-labelledby="navbarDropdown">
                            <div v-for="procteccionPersonal in categoryList">
                                <li v-if="procteccionPersonal.category_grouper_id.id === 5" >
                                    <RouterLink to="" @click="redirect({ name: 'public-products.index', query: { grouper: procteccionPersonal.category_grouper_id.id, category: procteccionPersonal.id }})"  class="dropdown-item fw-lighter">{{ procteccionPersonal.name }}</RouterLink>
                                </li>
                            </div>
                        </ul>
                    </li>
                    <li class="nav-item mt-4">
                        <RouterLink to="" @click="toggleMenu({ name: 'home' })" class="nav-link fs-16 d-flex">
                            <span>HOME</span>
                            <span class="ms-auto d-block">
                                <svg class="ms-auto" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.50012 1.36572L7.9906 7.85626L1.50012 14.3468" stroke="#FFCF2F" stroke-width="2"/>
                                </svg>
                            </span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="" @click="toggleMenu({ name: 'about.index' })" class="nav-link fs-16 d-flex">
                            <span>NOSOTROS</span>
                            <span class="ms-auto d-block">
                                <svg class="ms-auto" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.50012 1.36572L7.9906 7.85626L1.50012 14.3468" stroke="#FFCF2F" stroke-width="2"/>
                                </svg>
                            </span>
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="" @click="toggleMenu({ name: 'contact.index' })" class="nav-link fs-16 d-flex" data-bs-toggle="collapse" data-bs-target="#main_nav">
                            <span>CONTACTO</span>
                            <span class="ms-auto d-block">
                                <svg class="ms-auto" width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.50012 1.36572L7.9906 7.85626L1.50012 14.3468" stroke="#FFCF2F" stroke-width="2"/>
                                </svg>
                            </span>
                        </RouterLink>
                    </li>
                    <li class="my-5 px-4">
                        <div class="d-flex align-content-start">
                            <a class="d-flex d-md-block justify-content-center" href="mailto:ventas.valenindumentaria@gmail.com">
                                <img class="ms-md-4 w-xl-60 w-70" src="../../valenweb/assets/images/icons/email.png" />
                            </a>
                            <a class="ms-md-3 d-flex d-md-block justify-content-center" href="https://wa.me/542994585083" target="_blank">
                                <img class="ms-md-4 w-xl-60 w-70" src="../../valenweb/assets/images/icons/call.png" />
                            </a>
                            <a class="d-flex d-md-block justify-content-center ms-md-3" href="https://www.instagram.com/valenindumentariaaa/?hl=es-la">
                                <img class="ms-md-4 w-xl-60 w-70" src="../../valenweb/assets/images/icons/instagram.png" />
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- mega menu in header only desktop right-->
            <div class="col-md-4 d-none d-md-block">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item dropdown ktm-mega-menu ms-lg-4 d-none d-md-block">
                        <SearchValen v-if="viewSarch" @close="toggleSearchEmit" class="animate" />
                        <a v-if="!viewSarch" class="nav-link dropdown-toggle d-flex align-items-center" @click="toggleDropdown" :data-bs-toggle="dropdownClass" data-bs-toggle="dropdownClass">
                            <img class="me-2" src="../../valenweb/assets/images/icons/plus.svg" alt="Lupa" /> CATÁLOGO DE PRODUCTOS
                        </a>
                    </li>
                    <li class="nav-item ms-lg-4 d-flex align-items-center raya-s-header cursor-pointer" @click="toggleSearch">
                        <div class="nav-link" href="./special-orders"></div>
                        <img src="../../valenweb/assets/images/icons/lupa.svg" alt="Lupa" />
                    </li>
                    <li class="nav-item ms-lg-4 d-flex align-items-center">
                        <RouterLink :to="{ name: 'car.index' }" class="nav-link" >
                            <img src="../../valenweb/assets/images/icons/car.svg" alt="Lupa" />
                            <span class="cart-number" v-if="cartCount" >{{cartCount}}</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="dropdown-menu mega-menu py-md-5 px-md-5 ps-4 py-lg-5 px-lg-5 py-sm-4 px-sm-4 mt-xl-18" :class="['dropdown-menu', { show: isDropdownVisible }]">
            <div class="row ms-auto col-md-11">
                <div class="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                    <div>
                        <RouterLink to="" @click="redirect({ name: 'public-products.index', query: { grouper: 1 } })" class="d-flex align-items-center mb-md-3">
                            <img src="../../valenweb/assets/images/header/mega-menu/img.png" width="50" />
                            <p class="text-warning mb-0 ms-md-4 fw-light">
                                CALZADO <br class="d-md-block d-none" />
                                DE SEGURIDAD
                            </p>
                        </RouterLink>
                        <ul class="ms-md-6 ps-md-3">
                            <div v-for="calzadoSeguridad in categoryList">
                                <li class="mega-menu-item" v-if="calzadoSeguridad.category_grouper_id.id === 4" >
                                    <RouterLink  to=""  @click="redirect({ name: 'public-products.index', query: { grouper: calzadoSeguridad.category_grouper_id.id, category: calzadoSeguridad.id }})" class="dropdown-item fw-lighter">{{ calzadoSeguridad.name }}</RouterLink>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-5 col-md-6 col-sm-6 raya-s raya-e d-flex justify-content-center">
                    <div class="mx-5">
                        <RouterLink to="" @click="redirect({ name: 'public-products.index', query: { grouper: 1 } })" class="d-flex align-items-center mb-md-3">
                            <img src="../../valenweb/assets/images/header/mega-menu/img_1.png" width="50" />
                            <p class="text-warning mb-0 ms-md-4 fw-light">
                                ROPA DE <br class="d-md-block d-none" />
                                TRABAJO
                            </p>
                        </RouterLink>
                        <ul class="ms-md-6 ps-md-3">
                            <div v-for="ropaTrabajo in categoryList">
                                <li class="mega-menu-item" v-if="ropaTrabajo.category_grouper_id.id === 1" >
                                    <RouterLink to="" @click="redirect({ name: 'public-products.index', query: { grouper: ropaTrabajo.category_grouper_id.id, category: ropaTrabajo.id }})" class="dropdown-item fw-lighter">{{ ropaTrabajo.name }}</RouterLink>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6 d-flex justify-content-center">
                    <div>
                        <RouterLink to="" @click="redirect({ name: 'public-products.index', query: { grouper: 5 } })" class="d-flex align-items-center mb-md-3">
                            <img src="../../valenweb/assets/images/header/mega-menu/img_2.png" width="50" />
                            <p class="text-warning mb-0 ms-md-4 fw-light">
                                PROTECCIÓN <br class="d-md-block d-none" />
                                PERSONAL
                            </p>
                        </RouterLink>
                        <ul class="ms-md-6 ps-md-3">
                            <div v-for="procteccionPersonal in categoryList">
                                <li class="mega-menu-item" v-if="procteccionPersonal.category_grouper_id.id === 5" >
                                    <RouterLink to="" @click="redirect({ name: 'public-products.index', query: { grouper: procteccionPersonal.category_grouper_id.id, category: procteccionPersonal.id }})"  class="dropdown-item fw-lighter">{{ procteccionPersonal.name }}</RouterLink>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import useAuth from "@/composables/auth";
import {computed, onMounted, ref} from "vue";
import {useAuthStore} from "@/store/auth";
import useCategories from "@/composables/categories";
import SearchValen from "@/components/searchValen.vue";
import {useCartStore} from "@/composables/cartStore";
import router from "@/routes";
import routes from "@/routes";
const auth = useAuthStore()

let viewSarch = ref(false);
const cartStore = useCartStore();

let cartCount = computed(() => cartStore.cartCount);

const {categoryList , getCategoryList } = useCategories();


const user = computed(() => auth.user);
const { processing, logout } = useAuth();

const isDropdownVisible = ref(false);
const dropdownClass = ref('dropdown-menu'); // Clase del dropdown

const toggleSearchEmit = (show) => {
    console.log(show);
    viewSarch.value = show;
}
const toggleSearch = () => {
    viewSarch.value = !viewSarch.value;
};

const toggleMenu = (route) => {
    if (window.innerWidth < 992) {
        document.getElementById('main_nav').classList.toggle('show');
    }
    routes.push(route);
}

const toggleDropdown = (event) => {
    event.preventDefault();
    isDropdownVisible.value = !isDropdownVisible.value;
};

const redirect = (routeName) => {
    dropdownClass.value = dropdownClass.value === 'dropdown-menu' ? 'dropdown-menu show' : 'dropdown-menu';
    isDropdownVisible.value = false;
    router.push(routeName);
}


onMounted(() => {
    getCategoryList();
})
</script>

<style scoped>
    .animate{
        animation: 1s ease-out 0s 1 slideInFromLeft;
    }

    @keyframes slideInFromLeft {
        0% {
            transform: translateY(-100%);
        }
        100% {
            transform: translateY(0);
        }
    }
    .dropdown-toggle{
        cursor: pointer;
    }
    .dropdown-menu {
        display: none;
    }

    .dropdown-menu.show {
        display: block;
    }

    .cursor-pointer{
        cursor: pointer;
    }
</style>
