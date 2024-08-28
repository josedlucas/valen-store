import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

export default function useProducts() {
    const products = ref({})
    const product = ref({
        title: '',
        content: '',
        category_id: '',
        thumbnail: ''
    })
    const router = useRouter()
    const validationErrors = ref({})
    const isLoading = ref(false)
    const swal = inject('$swal')

    const getProducts = async (
        page = 1,
        search_category = '',
        search_id = '',
        search_title = '',
        search_content = '',
        search_global = '',
        order_column = 'created_at',
        order_direction = 'desc'
    ) => {
        axios.get('/api/products?page=' + page +
            '&search_category=' + search_category +
            '&search_id=' + search_id +
            '&search_title=' + search_title +
            '&search_content=' + search_content +
            '&search_global=' + search_global +
            '&order_column=' + order_column +
            '&order_direction=' + order_direction)
            .then(response => {
                products.value = response.data;
            })
    }

    const getProduct = async (id) => {
        axios.get('/api/products/' + id)
            .then(response => {
                product.value = response.data.data;
            })
    }

    const storeProduct = async (product) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        let serializedProduct = new FormData()
        for (let item in product) {
            if (product.hasOwnProperty(item)) {
                if(item === 'thumbnail') {
                    for (let i = 0; i < product.thumbnail.length; i++) {
                        serializedProduct.append('thumbnail[]', product.thumbnail[i])
                    }
                }else{
                    serializedProduct.append(item, product[item])
                }
            }
        }

        axios.post('/api/products', serializedProduct,{
            headers: {
                "content-type": "multipart/form-data"
            }
        })
            .then(response => {
                router.push({name: 'products.index'})
                swal({
                    icon: 'success',
                    title: 'Product saved successfully'
                })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const updateProduct = async (product) => {
        if (isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}


        let serializedProduct = new FormData()
        for (let item in product) {
            if (product.hasOwnProperty(item)) {
                if(item === 'thumbnail') {
                    for (let i = 0; i < product.thumbnail.length; i++) {
                        serializedProduct.append('thumbnail[]', product.thumbnail[i])
                    }
                }else{
                    serializedProduct.append(item, product[item])
                }
            }
        }

        axios.post('/api/products/' + product.id, serializedProduct, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
            .then(response => {
                router.push({name: 'products.index'})
                swal({
                    icon: 'success',
                    title: 'Product updated successfully'
                })
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors
                }
            })
            .finally(() => isLoading.value = false)
    }

    const deleteProduct = async (id) => {
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
                    axios.delete('/api/products/' + id)
                        .then(response => {
                            getProducts()
                            router.push({name: 'products.index'})
                            swal({
                                icon: 'success',
                                title: 'Product deleted successfully'
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

    return {
        products,
        product,
        getProducts,
        getProduct,
        storeProduct,
        updateProduct,
        deleteProduct,
        validationErrors,
        isLoading
    }
}
