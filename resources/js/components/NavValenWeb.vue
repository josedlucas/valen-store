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
                </RouterLink>
            </div>
            <!-- meno in mobile dropdown-->
            <div class="collapse col-md-4 d-md-none ps-4 ps-md-0" id="main_nav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'home' }" class="nav-link">HOME</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'about.index' }" class="nav-link">NOSOTROS</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink :to="{ name: 'contact.index' }" class="nav-link">CONTACTO</RouterLink>
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
                            <span class="cart-number" id="conterCart">21</span>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </nav>
        <div class="dropdown-menu mega-menu py-md-5 px-md-5 ps-4 py-lg-5 px-lg-5 py-sm-4 px-sm-4 mt-xl-18" :class="['dropdown-menu', { show: isDropdownVisible }]">
            <div class="row ms-auto col-md-11">
                <div class="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-center">
                    <div>
                        <div class="d-flex align-items-center mb-md-3">
                            <img src="../../valenweb/assets/images/header/mega-menu/img.png" width="50" />
                            <p class="text-warning mb-0 ms-md-4 fw-light">
                                CALZADO <br class="d-md-block d-none" />
                                DE SEGURIDAD
                            </p>
                        </div>
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
                        <div class="d-flex align-items-center mb-md-3">
                            <img src="../../valenweb/assets/images/header/mega-menu/img_1.png" width="50" />
                            <p class="text-warning mb-0 ms-md-4 fw-light">
                                ROPA DE <br class="d-md-block d-none" />
                                TRABAJO
                            </p>
                        </div>
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
                        <div class="d-flex align-items-center mb-md-3">
                            <img src="../../valenweb/assets/images/header/mega-menu/img_2.png" width="50" />
                            <p class="text-warning mb-0 ms-md-4 fw-light">
                                PROTECCIÓN <br class="d-md-block d-none" />
                                PERSONAL
                            </p>
                        </div>
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
import router from "@/routes";
const auth = useAuthStore()
let viewSarch = ref(false);

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
const toggleDropdown = (event) => {
    event.preventDefault();
    isDropdownVisible.value = !isDropdownVisible.value;
};

const redirect = (routeName) => {
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
