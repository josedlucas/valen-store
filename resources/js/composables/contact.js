import { ref, inject } from 'vue'
export default function useContact() {
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

    const storeContact = async (contact) => {
        isLoading.value = true
        axios.post('/api/contact', contact)
        .then(async response => {
            isLoading.value = false
            Toast.fire({
                icon: 'success',
                title: 'Contacto enviado correctamente'
            })
        })
        .catch( error => {
            isLoading.value = false
            Toast.fire({
                icon: 'error',
                title: 'No se pudo enviar el Contacto'
            })
        })
    }

    return {
        storeContact,
        isLoading
    }
}
