import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

export default function useSizes() {
    const sizes = ref([])
    const sizeList = ref([])
    const size = ref({
        name: ''
    })

    const router = useRouter()
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')

    const getSizes = async (
        page = 1,
        search_id = '',
        search_title = '',
        search_global = '',
        order_column = 'created_at',
        order_direction = 'desc'
    ) => {
        axios.get('/api/sizes?page=' + page +
            '&search_id=' + search_id +
            '&search_title=' + search_title +
            '&search_global=' + search_global +
            '&order_column=' + order_column +
            '&order_direction=' + order_direction)
            .then(response => {
                sizes.value = response.data;
            })
    }

    const getSize = async (id) => {
        axios.get('/api/sizes/' + id)
            .then(response => {
                size.value = response.data.data;
            })
    }

    const storeSize = async (size) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.post('/api/sizes', size)
            .then(response => {
                router.push({name: 'sizes.index'})
                swal({
                    icon: 'success',
                    title: 'Size saved successfully'
                })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const updateSize = async (size) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/sizes/' + size.id, size)
            .then(response => {
                router.push({name: 'sizes.index'})
                swal({
                    icon: 'success',
                    title: 'Size updated successfully'
                })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const deleteSize = async (id) => {
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
                    axios.delete('/api/sizes/' + id)
                        .then(response => {
                            getSizes()
                            router.push({name: 'sizes.index'})
                            swal({
                                icon: 'success',
                                title: 'Size deleted successfully'
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

    const getSizeList = async () => {
        axios.get('/api/size-list')
            .then(response => {
                sizeList.value = response.data.data;
            })
    }

    return {
        sizeList,
        sizes,
        size,
        getSizes,
        getSizeList,
        getSize,
        storeSize,
        updateSize,
        deleteSize,
        validationErrors,
        isLoading
    }
}
