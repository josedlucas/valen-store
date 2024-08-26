<template>
    <div class="input-number-container">
        <span class="input-number-decrement" @click="decrement">-</span>
        <input class="input-number border-0" type="number" v-model="localCount" min="0" max="100" />
        <span class="input-number-increment" @click="increment">+</span>
    </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { defineEmits, defineProps } from "vue";

const emit = defineEmits(['input']);
const props = defineProps({
    count: {
        type: Number,
        default: 1
    }
});

const localCount = ref(props.count);

// Emit the value whenever localCount changes
watch(localCount, (newValue) => {
    emit('input', newValue);
});

const decrement = () => {
    if (localCount.value > 0) {
        localCount.value--;
    }
};

const increment = () => {
    const maxValue = 9999999; // Valor máximo permitido
    if (localCount.value < maxValue) {
        localCount.value++;
    }
};
</script>
<style>
    input{
        box-shadow: none !important;
    }
</style>
