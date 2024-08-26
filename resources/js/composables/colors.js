import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

export default function useColors() {
    const colors = ref([])
    const colorList = ref([])
    const color = ref({
        name: ''
    })

    const router = useRouter()
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')

    const getColors = async (
        page = 1,
        search_id = '',
        search_title = '',
        search_global = '',
        order_column = 'created_at',
        order_direction = 'desc'
    ) => {
        axios.get('/api/colors?page=' + page +
            '&search_id=' + search_id +
            '&search_title=' + search_title +
            '&search_global=' + search_global +
            '&order_column=' + order_column +
            '&order_direction=' + order_direction)
            .then(response => {
                colors.value = response.data;
            })
    }

    const getColor = async (id) => {
        axios.get('/api/colors/' + id)
            .then(response => {
                color.value = response.data.data;
            })
    }

    const storeColor = async (color) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.post('/api/colors', color)
            .then(response => {
                router.push({name: 'colors.index'})
                swal({
                    icon: 'success',
                    title: 'Color saved successfully'
                })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const updateColor = async (color) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/colors/' + color.id, color)
            .then(response => {
                router.push({name: 'colors.index'})
                swal({
                    icon: 'success',
                    title: 'Color updated successfully'
                })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const deleteColor = async (id) => {
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
                    axios.delete('/api/colors/' + id)
                        .then(response => {
                            getColors()
                            router.push({name: 'colors.index'})
                            swal({
                                icon: 'success',
                                title: 'Color deleted successfully'
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

    const getColorList = async () => {
        axios.get('/api/color-list')
            .then(response => {
                colorList.value = response.data.data;
            })
    }

    return {
        colorList,
        colors,
        color,
        getColors,
        getColorList,
        getColor,
        storeColor,
        updateColor,
        deleteColor,
        validationErrors,
        isLoading
    }
}
