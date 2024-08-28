<template>
    <div class="row  my-4">
        <div class="col-md-12">
            <div class="card border-0">
                <div class="card-header bg-transparent">
                    <h5 class="float-start">Colors</h5>
                    <router-link v-if="can('category-create')" :to="{ name: 'colors.create' }" class="btn btn-success btn-sm float-end">
                        Create Color
                    </router-link>
                </div>
                <div class="card-body shadow-sm">
                    <div class="mb-4">
                        <input v-model="search_global" type="text" placeholder="Search..."
                               class="form-control w-25">
                    </div>
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr>
                                <th class="py-3 bg-gray-50 text-left">
                                    <input v-model="search_id" type="text"
                                           class="inline-block mt-1 form-control"
                                           placeholder="Filter by ID">
                                </th>
                                <th class="py-3 bg-gray-50 text-left">
                                    <input v-model="search_title" type="text"
                                           class="inline-block mt-1 form-control"
                                           placeholder="Filter by Title">
                                </th>
                                <th class="py-3 text-start"></th>
                                <th class="py-3 text-start"></th>
                            </tr>
                            <tr>
                                <th class="px-6 py-3 text-start">
                                    <div class="d-flex flex flex-row"
                                         @click="updateOrdering('id')">
                                        <div class="font-medium text-uppercase"
                                             :class="{ 'font-bold text-blue-600': orderColumn === 'id' }">
                                            ID
                                        </div>
                                        <div class="select-none ms-3">
                                <span :class="{
                                  'text-blue-600': orderDirection === 'asc' && orderColumn === 'id',
                                  'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'id',
                                }">&uarr;</span>
                                            <span :class="{
                                  'text-blue-600': orderDirection === 'desc' && orderColumn === 'id',
                                  'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'id',
                                }">&darr;</span>
                                        </div>
                                    </div>
                                </th>
                                <th class="px-6 py-3 text-left">
                                    <div class="d-flex flex flex-row"
                                         @click="updateOrdering('title')">
                                        <div class="font-medium text-uppercase"
                                             :class="{ 'font-bold text-blue-600': orderColumn === 'title' }">
                                            Title
                                        </div>
                                        <div class="select-none ms-3">
                                <span :class="{
                                  'text-blue-600': orderDirection === 'asc' && orderColumn === 'title',
                                  'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'title',
                                }">&uarr;</span>
                                            <span :class="{
                                  'text-blue-600': orderDirection === 'desc' && orderColumn === 'title',
                                  'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'title',
                                }">&darr;</span>
                                        </div>
                                    </div>
                                </th>
                                <th class="px-6 py-3 bg-gray-50 text-left">
                                    <div class="d-flex flex flex-row items-center justify-between cursor-pointer" @click="updateOrdering('created_at')">
                                        <div class="leading-4 font-medium text-gray-500 uppercase tracking-wider"
                                             :class="{ 'font-bold text-blue-600': orderColumn === 'created_at' }">
                                            CREADO
                                        </div>
                                        <div class="select-none ms-3">
                                            <span :class="{ 'text-blue-600': orderDirection === 'asc' && orderColumn === 'created_at', 'hidden': orderDirection !== '' && orderDirection !== 'asc' && orderColumn === 'created_at', }">&uarr;</span>
                                            <span :class="{ 'text-blue-600': orderDirection === 'desc' && orderColumn === 'created_at', 'hidden': orderDirection !== '' && orderDirection !== 'desc' && orderColumn === 'created_at', }">&darr;</span>
                                        </div>
                                    </div>
                                </th>
                                <th class="px-6 py-3 bg-gray-50 text-left">
                                    ACCIONES
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="color in colors.data" :key="color.id">
                                <td class="px-6 py-4 text-sm">
                                    {{ color.id }}
                                </td>
                                <td class="px-6 py-4 text-sm align-items-center d-flex">
                                    {{ color.code }}
                                    <span :style="'background-color:'+color.code+'; width: 30px; height: 30px; display: inline-block;'" class="rounded-circle ms-3"></span>
                                </td>
                                <td class="px-6 py-4 text-sm">
                                    {{ color.created_at }}
                                </td>
                                <td class="px-6 py-4 text-sm">
                                    <router-link v-if="can('category-edit')"
                                                 :to="{ name: 'colors.edit', params: { id: color.id } }"
                                                 class="badge bg-success">Editar
                                    </router-link>
                                    <a href="#" v-if="can('category-delete')" @click.prevent="deleteColor(color.id)"
                                       class="ms-2 badge bg-danger">Eliminar</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer">
                    <Pagination :data="colors" :limit="3"
                                @pagination-change-page="page => getColors(page, search_id, search_title, search_global, orderColumn, orderDirection)"
                                class="mt-4"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, watch} from "vue";
import {useAbility} from '@casl/vue'
import useColors from "@/composables/colors";

const search_id = ref('')
const search_title = ref('')
const search_global = ref('')
const orderColumn = ref('created_at')
const orderDirection = ref('desc')
const {colors, getColors, deleteColor} = useColors()
const {can} = useAbility()
onMounted(() => {
    getColors()
})
const updateOrdering = (column) => {
    orderColumn.value = column;
    orderDirection.value = (orderDirection.value === 'asc') ? 'desc' : 'asc';
    getColors(
        1,
        search_id.value,
        search_title.value,
        search_global.value,
        orderColumn.value,
        orderDirection.value
    );
}
watch(search_id, (current, previous) => {
    getColors(
        1,
        current,
        search_title.value,
        search_global.value
    )
})
watch(search_title, (current, previous) => {
    getColors(
        1,
        search_id.value,
        current,
        search_global.value
    )
})
watch(search_global, _.debounce((current, previous) => {
    getColors(
        1,
        search_id.value,
        search_title.value,
        current
    )
}, 200))
</script>
