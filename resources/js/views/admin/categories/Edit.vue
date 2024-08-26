<template>
    <div class="row container-fluid my-4">
        <div class="col-md-12">
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <form @submit.prevent="submitForm">
                        <!-- Title -->
                        <div class="mb-3">
                            <label for="post-title" class="form-label">
                                Title
                            </label>
                            <input v-model="category.name" id="post-title" type="text" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.name }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.name">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <h6 class="mt-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-square" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                            </svg> Agrupardor de Categorias
                        </h6>
                        <!-- Category -->
                        <div class="mb-3">
                            <v-select v-model="category.category_grouper_id" :options="categorygrouperList"
                                      :reduce="categorygrouper => categorygrouper.id" label="name" class="form-control" placeholder="Seleccione agrupador"/>
                            <div class="text-danger mt-1">
                                {{ errors.categories }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.categories">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <!-- Buttons -->
                        <div class="mt-4">
                            <button :disabled="isLoading" class="btn btn-success">
                                <div v-show="isLoading" class=""></div>
                                <span v-if="isLoading">Processing...</span>
                                <span v-else>Guardar</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, reactive, watchEffect } from "vue";
import { useRoute } from "vue-router";
import useCategories from "@/composables/categories";
import useCategoryGroupers from "@/composables/categorygroupers";
import { useForm, useField, defineRule } from "vee-validate";
import { required, min } from "@/validation/rules"

defineRule('required', required)
defineRule('min', min);

    // Define a validation schema
    const schema = {
        name: 'required|min:3',
        category_grouper_id: 'required'
    }
    // Create a form context with the validation schema
    const { validate, errors, resetForm } = useForm({ validationSchema: schema })
    // Define actual fields for validation
    const { value: name } = useField('name', null, { initialValue: '' });
    const { value: category_grouper_id } = useField('category_grouper_id', null, { initialValue: '' });

    const { category: postData, getCategory, updateCategory, validationErrors, isLoading } = useCategories()
    const { categorygrouperList ,getCategoryGrouperList } = useCategoryGroupers()
    const category = reactive({
        name,
        category_grouper_id
    })
    const route = useRoute()
    function submitForm() {
        validate().then(form => { if (form.valid) updateCategory(category) })
    }
    onMounted(() => {
        getCategory(route.params.id)
        getCategoryGrouperList()
    })
    // https://vuejs.org/api/reactivity-core.html#watcheffect
    watchEffect(() => {
        category.id = postData.value.id
        category.name = postData.value.name
        category.category_grouper_id = postData.value.category_grouper_id
    })
</script>
