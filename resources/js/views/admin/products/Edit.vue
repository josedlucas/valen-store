<template>
    <form @submit.prevent="submitForm">
        <div class="row my-5">
            <div class="col-md-8">
                <div class="card border-0 shadow-sm">
                    <div class="card-body">

                        <!-- Title -->
                        <div class="mb-3">
                            <label for="post-title" class="form-label">
                                Nombre
                            </label>
                            <input v-model="product.title" id="post-title" type="text" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.title }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.title">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <!-- Content -->
                        <div class="mb-3">
                            <label for="post-content" class="form-label">
                                Content
                            </label>
                            <TextEditorComponent v-model="product.content"/>
                            <div class="text-danger mt-1">
                                {{ errors.content }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.content">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card border-0 shadow-sm">
                    <div class="card-body">
                        <h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                            </svg> Acciones
                        </h6>
                        <div class="mt-3 justify-content-start d-flex">
                            <button :disabled="isLoading" class="btn btn btn-outline-primary me-2">
                                <div v-show="isLoading" class=""></div>
                                <span v-if="isLoading">Processing...</span>
                                <span v-else>Save Draft</span>
                            </button>
                            <button :disabled="isLoading" class="btn btn-success">
                                <div v-show="isLoading" class=""></div>
                                <span v-if="isLoading">Processing...</span>
                                <span v-else>Publish</span>
                            </button>
                        </div>
                        <h6 class="mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                            </svg> Categorias
                        </h6>
                        <!-- Category -->
                        <div class="mb-3">
                            <v-select multiple v-model="productData.categories" :options="categoryList"
                                      :reduce="category => category.id" label="name" class="form-control" placeholder="Select category"/>
                            <div class="text-danger mt-1">
                                {{ errors.categories }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.categories">
                                    {{ message }}
                                </div>
                            </div>
                        </div>

                        <h6 class="mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                            </svg> Colores
                        </h6>
                        <!-- Color -->
                        <div class="mb-3">
                            <v-select
                                multiple
                                v-model="product.colors"
                                :options="colorList"
                                :reduce="color => color.id"
                                label="code"
                                class="form-control"
                                placeholder="Select color">
                                <template #selected-option="{ code }">
                                    <div style="display: flex; align-items: center;">
                                        <span :style="{ backgroundColor: code }"
                                              style="display: inline-block; width: 20px; height: 20px; border: 1px solid #ddd; margin-right: 10px;">
                                        </span>
                                        <span>{{ code }}</span>
                                    </div>
                                </template>
                                <template #option="{ code }">
                                    <div style="display: flex; align-items: center;">
                                        <span :style="{ backgroundColor: code }"
                                              style="display: inline-block; width: 20px; height: 20px; border: 1px solid #ddd; margin-right: 10px;">
                                        </span>
                                        <span>{{ code }}</span>
                                    </div>
                                </template>
                            </v-select>
                            <div class="text-danger mt-1">
                                {{ errors.colors }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.colors">
                                    {{ message }}
                                </div>
                            </div>
                        </div>

                        <h6 class="mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                            </svg> Tallas
                        </h6>
                        <!-- Category -->
                        <div class="mb-3">
                            <v-select multiple v-model="product.sizes" :options="sizeList"
                                      :reduce="size => size.id" label="name" class="form-control" placeholder="Select tallas"/>
                            <div class="text-danger mt-1">
                                {{ errors.sizes }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.sizes">
                                    {{ message }}
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <h6 class="mt-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                                </svg> Thumbnail
                            </h6>
                          <div class="row my-5 mt-3">
                            <div v-for="thumbnail in productData.original_all_images" class="col-xl-3 mt-3 position-relative">
                              <img :src="thumbnail.url" :alt="thumbnail.name" class="img-thumbnail">
                              <span class="delete" @click="deleteThumbnail(thumbnail.id)">
                                <svg fill="#FF0000FF" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve" stroke="#b0b0b0">
                                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                  <g id="SVGRepo_iconCarrier">
                                    <g id="XMLID_6_">
                                      <g id="XMLID_11_"><path d="M240,121.076H30V275c0,8.284,6.716,15,15,15h60h37.596c19.246,24.348,49.031,40,82.404,40c57.897,0,105-47.103,105-105 C330,172.195,290.816,128.377,240,121.076z M225,300c-41.355,0-75-33.645-75-75s33.645-75,75-75s75,33.645,75,75 S266.355,300,225,300z"></path></g>
                                      <g id="XMLID_18_"><path d="M240,90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15v45H45 H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15H240z M90,30h90v30h-15h-60H90V30z"></path></g>
                                      <g id="XMLID_23_"><path d="M256.819,193.181c-5.857-5.858-15.355-5.858-21.213,0L225,203.787l-10.606-10.606c-5.857-5.858-15.355-5.858-21.213,0 c-5.858,5.858-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.465,10.607-4.394L225,246.213l10.606,10.606 c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.465,10.606-4.394c5.858-5.858,5.858-15.355,0-21.213L246.213,225 l10.606-10.606C262.678,208.535,262.678,199.039,256.819,193.181z"></path></g>
                                    </g>
                                  </g>
                                </svg>
                              </span>
                              <div style="font-size: 10px">{{ thumbnail.name }}</div>
                            </div>
                          </div>
                            <input @change="handleFileChange" type="file" class="form-control" id="thumbnail" multiple/>

                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.thumbnail">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>
<script setup>
    import { onMounted, reactive, watchEffect } from "vue";
    import { useRoute } from "vue-router";
    import useCategories from "@/composables/categories";
    import useColors from "@/composables/colors";
    import useSizes from "@/composables/sizes";
    import useProducts from "@/composables/products";
    import { useForm, useField, defineRule } from "vee-validate";
    import { required, min } from "@/validation/rules"
    import TextEditorComponent from "@/components/TextEditorComponent.vue";

    defineRule('required', required)
    defineRule('min', min);

    // Define a validation schema
    const schema = {
        title: 'required|min:5',
        content: 'required|min:50',
        categories: 'required',
        colors: 'required',
        sizes: 'required'
    }
    // Create a form context with the validation schema
    const { validate, errors, resetForm } = useForm({ validationSchema: schema })
    // Define actual fields for validation
    const { value: title } = useField('title', null, { initialValue: '' });
    const { value: content } = useField('content', null, { initialValue: '' });
    const { value: categories } = useField('categories', null, { initialValue: '', label: 'category' });
    const { value: colors } = useField('colors', null, { initialValue: '', label: 'color' });
    const { value: sizes } = useField('sizes', null, { initialValue: '', label: 'size' });

    const { categoryList, getCategoryList } = useCategories()
    const { colorList, getColorList } = useColors()
    const { sizeList, getSizeList } = useSizes()

    const { product: productData, getProduct, updateProduct, validationErrors, isLoading } = useProducts()
    const product = reactive({
        title,
        content,
        categories,
        colors,
        sizes,
        thumbnail: []
    })
    const route = useRoute()
    function submitForm() {
        validate().then(form => { if (form.valid) updateProduct(product) })
    }

    function handleFileChange(event) {
        product.thumbnail = Array.from(event.target.files);
    }

    const deleteThumbnail = (id) => {
      axios.delete('/api/product/thumbnails/' + id).then(() => {
        getProduct(route.params.id)
      })
    }

    onMounted(() => {
        getProduct(route.params.id)
        getCategoryList()
        getColorList()
        getSizeList()
    })
    // https://vuejs.org/api/reactivity-core.html#watcheffect
    watchEffect(() => {
        product.id = productData.value.id
        product.title = productData.value.title
        product.content = productData.value.content
       // product.thumbnail = productData.value.original_all_images
        product.categories = productData.value.categories
        product.colors = productData.value.colors
        product.sizes = productData.value.sizes
    })
</script>
<style>
  span.delete {
    position: absolute;
    right: 1px;
    cursor: pointer;
  }
</style>
