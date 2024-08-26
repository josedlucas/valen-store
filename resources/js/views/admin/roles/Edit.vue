<template>
    <div class="row justify-content-center my-5">
        <div class="col">
            <div class="card border-0 shadow-sm">
                <div class="card-body">
                    <form @submit.prevent="submitForm">
                        <!-- Title -->
                        <div class="mb-3">
                            <label for="post-title" class="form-label">
                                Title
                            </label>
                            <div class="form-outline w-25">
                                <input v-model="role.name" id="post-title" type="text" class="form-control" />
                            </div>
                            <div class="text-danger mt-1">
                                {{ errors.name }}
                            </div>
                            <div class="text-danger mt-1">
                                <div v-for="(message, index) in validationErrors?.name" :key="index">
                                    {{ message }}
                                </div>
                            </div>
                        </div>
                        <DualListBox
                            leftLabel="Available Permissions"
                            rightLabel="Current Permissions"
                            :leftData="availablePermissions"
                            :rightData="currentPermissions"
                            @onChangeList="onChangeList"
                        />
                        <!-- Buttons -->
                        <div class="mt-4">
                            <button :disabled="isLoading" class="btn btn-success">
                                <div v-if="isLoading" class="spinner-border spinner-border-sm" role="status"></div>
                                <span v-if="isLoading">Processing...</span>
                                <span v-else>Update</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useForm, useField, defineRule } from "vee-validate";
import axios from "axios"; // Asegúrate de que axios esté importado
import DualListBox from "../../../components/DualListBox.vue";
import useRoles from "@/composables/roles";
import { required, min } from "@/validation/rules";

defineRule('required', required);
defineRule('min', min);

// Definir esquema de validación
const schema = {
    name: 'required|min:3'
};

const { validate, errors } = useForm({ validationSchema: schema });
const { value: name } = useField('name', null, { initialValue: '' });

const { role: postData, updateRolePermissions, getRole, validationErrors, isLoading } = useRoles();
const route = useRoute();

const role = reactive({ name });
const availablePermissions = ref([]);
const currentPermissions = ref([]);

onMounted(async () => {
    const response = await axios.get('/api/permissions/');
    const allPermission = response.data.data;

    const rolePermissionResponse = await axios.get(`/api/role-permissions/${route.params.id}`);
    const rolePermissionList = rolePermissionResponse.data.data;

    availablePermissions.value = getDifference(allPermission, rolePermissionList);
    currentPermissions.value = rolePermissionList;

    getRole(route.params.id);
});

watchEffect(() => {
    role.id = postData.value?.id;
    role.name = postData.value?.name;
});

function submitForm() {
    validate().then((form) => {
        if (form.valid) {
            const permissions = currentPermissions.value.map(a => a.id);
            updateRolePermissions(role, permissions);
        }
    });
}

function onChangeList(data) {
    // Manejar la lista actualizada
}

function getDifference(array1, array2) {
    return array1.filter(object1 => {
        return !array2.some(object2 => object1.id === object2.id);
    });
}
</script>
