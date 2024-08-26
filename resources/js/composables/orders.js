import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'
import router from "@/routes";

export default function useOrder() {
    const order = ref([])

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
    const storeOrder = async (form) => {
       axios.post('/api/orders', form)
        .then(response => {
            console.log('RESPONSE', response);
            console.log('ORDER', response.data?.data?.id);
            console.log('ORDER', response.data);
            // redirect
            window.location.href = '/order/' + response.data.data.id
        }).catch( error => {
            isLoading.value = false
            Toast.fire({
                icon: 'error',
                title: 'No se pudo generar la orden'
            })
        })
    }

    const getOrder = async (id) => {
        isLoading.value = true
        axios.get('/api/orders', { params: { id } })
        .then(response => {
            isLoading.value = false
            order.value = response.data.data
        }).catch( error => {
            isLoading.value = false
        })
    }



    return {
        storeOrder,
        getOrder,
        order,
        isLoading
    }
}
