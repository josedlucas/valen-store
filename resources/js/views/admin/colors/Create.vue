<template>
    <div class="row container-fluid my-4 h-100">
        <div class="col-md-12">
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <form @submit.prevent="submitForm">
                        <!-- Title -->
                        <div class="mb-3">
                            <label for="post-code" class="form-label">
                                Title
                            </label>
                            <input v-model="color.code" id="post-code" type="color" class="form-control">
                            <div class="text-danger mt-1">
                                {{ errors.code }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="message in validationErrors?.code">
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
    import { reactive } from "vue";
    import useColors from "@/composables/colors";
    import { useForm, useField, defineRule } from "vee-validate";
    import { required, min } from "@/validation/rules"
    defineRule('required', required)
    defineRule('min', min);

    // Define a validation schema
    const schema = {
        code: 'required|min:3'
    }
    // Create a form context with the validation schema
    const { validate, errors } = useForm({ validationSchema: schema })
    // Define actual fields for validation
    const { value: code } = useField('code', null, { initialValue: '' });
    const { storeColor, validationErrors, isLoading } = useColors()
    const color = reactive({
        code
    })
    function submitForm() {
        validate().then(form => { if (form.valid) storeColor(color) })
    }
</script>
