<script setup>
import { ref, computed } from 'vue'
import store from '../store'

const productList = computed(() => store.state.globalData['040CDF59-7826-0FFE-A3CB-A87C6657649A'].data)

const popularProduct = computed(() => store.state.globalData['A8873A85-096C-B897-BEBA-FADEEE8E7FC3'].data)

const popularObject = computed(() => store.state.globalData['137AC74E-49E7-7A73-FCFC-6AD41176D371'].data)

const productLength = computed(() => store.state.globalData['525EB075-77FF-A56A-F710-DE04E29F3495'].data)

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <div>
    <h3>产品热度列表（共{{ productLength }}条）</h3>
    {{ productList }}
  </div>

  <div>
    <h3>热销产品</h3>
    {{ popularProduct }}
  </div>

  <div>
    <h3>热销产品别称</h3>
    {{ popularObject }}
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
