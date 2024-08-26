<template>
    <form @submit.prevent="submitForm">
        <div class="row my-5">
            <div class="col-md-8">
                <div class="card border-0 shadow-sm">
                    <div class="card-body">

                        <!-- Title -->
                        <div class="mb-3">
                            <label for="product-title" class="form-label">
                                Nombre
                            </label>
                            <input v-model="product.title" id="product-title" type="text" class="form-control">
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
                            <label for="product-content" class="form-label">
                                Descripción
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
                            <v-select multiple v-model="product.categories" :options="categoryList"
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
                                      :reduce="size => size.id" label="name" class="form-control" placeholder="Select size"/>
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
import {onMounted, reactive, ref} from "vue";
import TextEditorComponent from "@/components/TextEditorComponent.vue";
import DropZone from "@/components/DropZone.vue";
import useCategories from "@/composables/categories";
import useColors from "@/composables/colors";
import useSizes from "@/composables/sizes";
import useProducts from "@/composables/products";
import {useForm, useField, defineRule} from "vee-validate";
import {required, min} from "@/validation/rules"

defineRule('required', required)
defineRule('min', min);


const customOption = option => {
    return {
        label: `
            <div style="display: flex; align-items: center;">
                <span style="display: inline-block; width: 20px; height: 20px; background-color: ${option.code}; margin-right: 10px; border: 1px solid #ddd;"></span>
                <span>${option.code}</span>
            </div>
        `,
        value: option.id
    };
};

const dropZoneActive = ref(true)

// Define a validation schema
const schema = {
    title: 'required|min:5',
    content: 'required|min:50',
    categories: 'required',
    colors: 'required',
}

// Create a form context with the validation schema
const {validate, errors} = useForm({validationSchema: schema})

// Define actual fields for validation
const {value: title} = useField('title', null, {initialValue: ''});
const {value: content} = useField('content', null, {initialValue: ''});
const {value: categories} = useField('categories', null, {initialValue: '', label: 'category'});
const {value: colors} = useField('colors', null, {initialValue: '', label: 'color'});
const {value: sizes} = useField('sizes', null, {initialValue: '', label: 'size'});

const {categoryList, getCategoryList} = useCategories()
const {colorList, getColorList} = useColors()
const {sizeList, getSizeList} = useSizes()

const {storeProduct, validationErrors, isLoading} = useProducts()
const product = reactive({
    title,
    content,
    categories,
    colors,
    sizes,
    thumbnail: []
})

const thefile = ref('')

function submitForm() {
    validate().then(form => {
        if (form.valid) storeProduct(product)
    })
}

function handleFileChange(event) {
    product.thumbnail = Array.from(event.target.files);
}
onMounted(() => {
    getCategoryList()
    getColorList()
    getSizeList()
})

</script>
