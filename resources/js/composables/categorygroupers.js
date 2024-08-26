import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

export default function useCategoryGroupers() {
    const categorygroupers = ref([])
    const categorygrouperList = ref([])
    const categorygrouper = ref({
        name: ''
    })

    const router = useRouter()
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')

    const getCategoryGroupers = async (
        page = 1,
        search_id = '',
        search_title = '',
        search_global = '',
        order_column = 'created_at',
        order_direction = 'desc'
    ) => {
        axios.get('/api/categorygroupers?page=' + page +
            '&search_id=' + search_id +
            '&search_title=' + search_title +
            '&search_global=' + search_global +
            '&order_column=' + order_column +
            '&order_direction=' + order_direction)
            .then(response => {
                categorygroupers.value = response.data;
            })
    }

    const getCategoryGrouper = async (id) => {
        axios.get('/api/categorygroupers/' + id)
            .then(response => {
                categorygrouper.value = response.data.data;
            })
    }

    const storeCategoryGrouper = async (categorygrouper) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.post('/api/categorygroupers', categorygrouper)
            .then(response => {
                router.push({name: 'categorygroupers.index'})
                swal({
                    icon: 'success',
                    title: 'CategoryGrouper saved successfully'
                })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const updateCategoryGrouper = async (categorygrouper) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/categorygroupers/' + categorygrouper.id, categorygrouper)
            .then(response => {
                router.push({name: 'categorygroupers.index'})
                swal({
                    icon: 'success',
                    title: 'CategoryGrouper updated successfully'
                })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const deleteCategoryGrouper = async (id) => {
        swal({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this action!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            confirmButtonColor: '#ef4444',
            timer: 20000,
            timerProgressBar: true,
            reverseButtons: true
        })
            .then(result => {
                if (result.isConfirmed) {
                    axios.delete('/api/categorygroupers/' + id)
                        .then(response => {
                            getCategoryGroupers()
                            router.push({name: 'categorygroupers.index'})
                            swal({
                                icon: 'success',
                                title: 'CategoryGrouper deleted successfully'
                            })
                        })
                        .catch(error => {
                            swal({
                                icon: 'error',
                                title: 'Something went wrong'
                            })
                        })
                }
            })
    }

    const getCategoryGrouperList = async () => {
        axios.get('/api/categorygrouper-list')
            .then(response => {
                categorygrouperList.value = response.data.data;
            })
    }

    return {
        categorygrouperList,
        categorygroupers,
        categorygrouper,
        getCategoryGroupers,
        getCategoryGrouperList,
        getCategoryGrouper,
        storeCategoryGrouper,
        updateCategoryGrouper,
        deleteCategoryGrouper,
        validationErrors,
        isLoading
    }
}
