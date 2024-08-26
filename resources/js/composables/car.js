import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

export default function useCar() {
    const car = ref([])

    const isLoading = ref(false)
    const swal = inject('$swal')

    const Toast = swal.mixin({
        toast: true,
        position: 'center',
        customClass: {
            popup: 'colored-toast',
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
    })
    const getCar = async () => {
        axios.get('/api/car')
            .then(response => {
                car.value = response.data.data[0];
            })
    }

    const addToCar = async (product) => {
        isLoading.value = true
        axios.post('/api/car', product)
        .then(response => {
            isLoading.value = false
            Toast.fire({
                icon: 'success',
                title: 'Producto agregado al carrito correctamente'
            })
        })
        .catch( error => {
            isLoading.value = false
            Toast.fire({
                icon: 'error',
                title: 'No se pudo agregar el producto al carrito'
            })
        })
    }

    const deleteCarItem = async (id) => {
        isLoading.value = true
        axios.delete('/api/car/' + id)
        .then(response => {
            getCar();
            isLoading.value = false
            Toast.fire({
                icon: 'success',
                title: 'Producto agregado al carrito correctamente'
            })
        })
        .catch( error => {
            isLoading.value = false
            Toast.fire({
                icon: 'error',
                title: 'No se pudo eliminar del carrito'
            })
        })
    }

    const deleteCar = async ($id) => {
        isLoading.value = true
        axios.delete('/api/car/deleteall/'+ $id)
        .then(response => {
            getCar();
            isLoading.value = false
            Toast.fire({
                icon: 'success',
                title: 'Carrito vaciado correctamente'
            })
        })
        .catch( error => {
            isLoading.value = false
            Toast.fire({
                icon: 'error',
                title: 'No se pudo vaciar el carrito'
            })
        })
    }

    const updateCar = () => {
        isLoading.value = true
        axios.put('/api/car/' + car.value.id, car.value)
        .then(response => {
            isLoading.value = false
        })
        .catch( error => {
            isLoading.value = false
            Toast.fire({
                icon: 'error',
                title: 'No se pudo actualizar el carrito'
            })
        })
    }

    return {
        getCar,
        addToCar,
        deleteCarItem,
        deleteCar,
        updateCar,
        car,
        isLoading
    }
}
