<template>
    <div class="data-number" :style="{ color, borderColor: color }">
        <p>3的时候红色</p>
        <p>2的时候橙色</p>
        <p>1的时候绿色</p>
    </div>
    <h2></h2>
</template>

<script setup>
import { defineExpose, ref } from 'vue'

const color = ref('')

function changeColor (value) {
    console.log('changeColor come in', value)
    color.value = value
}

defineExpose({
    changeColor
})
</script>

<style scoped>
p {
    margin: 0;
}

.data-number {
    padding: 18px;
    border: 1px solid rgb(200, 89, 89);
    border-radius: 6px;
    width: 200px;
    margin: 0 auto;
}
</style>