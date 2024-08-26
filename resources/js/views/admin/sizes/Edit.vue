<template>
    <div class="row container-fluid my-4">
        <div class="col-md-12">
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <form @submit.prevent="submitForm">
                        <!-- Title -->
                        <div class="mb-3">
                            <label for="post-title" class="form-label">
                                Talla
                            </label>
                            <input v-model="size.name" id="post-title" type="text" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.name }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.name">
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
import useSizes from "@/composables/sizes";
import { useForm, useField, defineRule } from "vee-validate";
import { required, min } from "@/validation/rules"
defineRule('required', required)
defineRule('min', min);

// Define a validation schema
const schema = {
    name: 'required|min:1'
}
// Create a form context with the validation schema
const { validate, errors, resetForm } = useForm({ validationSchema: schema })
// Define actual fields for validation
const { value: name } = useField('name', null, { initialValue: '' });
const { size: postData, getSize, updateSize, validationErrors, isLoading } = useSizes()
const size = reactive({
    name
})
const route = useRoute()
function submitForm() {
    validate().then(form => { if (form.valid) updateSize(size) })
}
onMounted(() => {
    getSize(route.params.id)
})
// https://vuejs.org/api/reactivity-core.html#watcheffect
watchEffect(() => {
    size.id = postData.value.id
    size.name = postData.value.name
})
</script>
