<template>
    <div class="input-number-container">
        <span class="input-number-decrement" @click="decrement">-</span>
        <input
            class="input-number border-0"
            type="number"
            v-model="localCount"
            :min="0"
            :max="maxValue"
        />
        <span class="input-number-increment" @click="increment">+</span>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { defineEmits, defineProps } from "vue";

// Emisiones y propiedades
const emit = defineEmits(['update:count']);
const props = defineProps({
    count: {
        type: Number,
        default: 1
    },
    maxValue: {
        type: Number,
        default: 100
    }
});

// Valor local del contador
const localCount = ref(props.count);

// Emitir el valor al componente padre cuando cambia
watch(localCount, (newValue) => {
    emit('update:count', newValue);
});

// Funciones de incremento y decremento
const decrement = () => {
    if (localCount.value > 0) {
        localCount.value--;
    }
};

const increment = () => {
    if (localCount.value < props.maxValue) {
        localCount.value++;
    }
};
</script>

<style scoped>
.input-number-container {
    display: flex;
    align-items: center;
}

.input-number-decrement,
.input-number-increment {
    cursor: pointer;
    padding: 0 10px;
    font-size: 1.2em;
    user-select: none;
}

.input-number {
    width: 60px;
    text-align: center;
    box-shadow: none;
}

@media (max-width: 768px) {
    .input-number-decrement,
    .input-number-increment{
        border: none !important;
        background-color: transparent !important;
    }
}
</style>
