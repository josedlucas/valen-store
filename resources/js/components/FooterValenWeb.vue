<template>
    <footer class="footer bg-footer align-items-md-center d-md-flex">
        <div class="container-xl mx-sm-auto mx-auto py-lg-4 my-lg-4 py-md-5 my-md-4 pt-sm-4 pb-sm-5 my-sm-3 pt-3 pb-5 my-4">
            <div class="row">
                <RouterLink :to="{ name: 'home' }" class="col-xl-2 col-sm-6 col-12 mt-xl-0 mt-4">
                    <img class="mx-auto d-block" src="../../valenweb/assets/images/logo/logo.svg" />
                    <p class="text-warning text-center mt-3">
                        El Chocón 1433 <br />
                        Neuquén Capital
                    </p>
                </RouterLink>
                <div class="col-xl-4 col-sm-6 col-6 mt-4 mt-md-0 d-flex">
                    <ul class="ms-xl-6">
                        <li class="mega-menu-item">
                            <RouterLink :to="{ name: 'public-products.index' }" class="dropdown-item ms-3 fs-10"> CATÁLOGO DE PRODUCTOS</RouterLink>
                        </li>
                        <li class="mega-menu-item">
                            <RouterLink to="/" class="dropdown-item ms-3 fs-10"> ROPA DE TRABAJO</RouterLink>
                        </li>
                        <li class="mega-menu-item">
                            <RouterLink to="/" class="dropdown-item ms-3 fs-10"> ZALZADO DE SEGURIDAD</RouterLink>
                        </li>
                        <li class="mega-menu-item">
                            <RouterLink to="/" class="dropdown-item ms-3 fs-10"> PROTECCIÓN PERSONAL</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-3 col-sm-6 col-6 mt-lg-0 mt-4">
                    <ul class="ms-xl-5">
                        <li class="mega-menu-item">
                            <RouterLink :to="{ name: 'about.index' }" class="dropdown-item ms-3 fs-10">NOSOTROS</RouterLink>
                        </li>
                        <li class="mega-menu-item">
                            <RouterLink :to="{ name: 'contact.index' }" class="dropdown-item ms-3 fs-10"> CONTACTO</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="col-xl-3 d-flex justify-content-xl-center col-sm-6 col-10 mt-lg-0 mt-sm-auto mx-auto justify-content-sm-end justify-content-start mt-1 pt-sm-0 pt-4">
                    <div class="d-flex align-content-start">
                        <a class="d-flex d-md-block justify-content-center" href="mailto:ventas.valenindumentaria@gmail.com">
                            <img class="ms-md-4 w-xl-60 w-60" src="../../valenweb/assets/images/icons/email.png" />
                        </a>
                        <a class="ms-md-3 d-flex d-md-block justify-content-center" href="tel:02994585083">
                            <img class="ms-md-4 w-xl-60 w-60" src="../../valenweb/assets/images/icons/call.png" />
                        </a>
                        <a class="d-flex d-md-block justify-content-center ms-md-3" href="https://www.instagram.com/valenindumentariaaa/?hl=es-la">
                            <img class="ms-md-4 w-xl-60 w-60" src="../../valenweb/assets/images/icons/instagram.png" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>

</script>
