<template>
    <div class="input-number-container">
        <span class="input-number-decrement">-</span>
        <input class="input-number border-0" type="number" :value="count" min="0" max="100" />
        <span class="input-number-increment">+</span>
    </div>
</template>

<script setup>
import {onMounted, defineEmits} from "vue";

const props = defineProps({
   count:{
       type: Number,
       default: 0
   }
})

const emit = defineEmits(['input']);
onMounted(() => {
    const inputs = document.querySelectorAll('.input-number');

    inputs.forEach(input => {
        // Obtener los botones de decremento e incremento para cada input
        const decrementButton = input.parentElement.querySelector('.input-number-decrement');
        const incrementButton = input.parentElement.querySelector('.input-number-increment');

        // Decrementar el valor del input
        decrementButton.addEventListener('click', () => {
            const currentValue = parseInt(input.value) || 0;
            const minValue = 0; // Valor mínimo permitido

            if (currentValue > minValue) {
                input.value = currentValue - 1;
            }
            emit('input', input.value);
        });

        // Incrementar el valor del input
        incrementButton.addEventListener('click', () => {
            const currentValue = parseInt(input.value) || 0;
            const maxValue = parseInt(input.getAttribute('max')) || Infinity;

            if (currentValue < maxValue) {
                input.value = currentValue + 1;
            }
            emit('input', input.value);
        });

        // Evitar que el usuario introduzca manualmente números negativos
        input.addEventListener('input', () => {
            const value = parseInt(input.value);
            if (value < 0 || isNaN(value)) {
                input.value = 0;
            }
            emit('input', input.value);
        });
    });
})
</script>
