<script setup>
import { ref, nextTick } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import globalDataConfig from './config/kanban'
import store from './store'
import datasetFactoryMap from './config/dataset-factory'
import DataNumber from './components/DataNumber.vue'

const dataNumberRef = ref(null);

store.subscribe((mutation, state) => {
  // console.log('store.subscribe1', mutation, state)
  if (mutation.type === 'globalData/SET_DATASET') {
    const { dataset } = state.globalData
    Object.keys(dataset).map(id => {
      const config = globalDataConfig[id]
      // 注册动态模块
      store.registerModule(['globalData', id], {
        namespaced: true,
        state: {
          data: null
        },
        mutations: {
          UPDATE (state, { config, data }) {
            state.data = data
          }
        }
      })
    })
    Object.keys(dataset).map(id => {
      const config = globalDataConfig[id]
      // 更新顶层数据
      if (config.dataLevel === 0) {
        const { factoryId } = config
        const { data: jsonData } = datasetFactoryMap[factoryId]
        const json = JSON.parse(jsonData)
        const { data } = json
        // console.log('store.commit', id, config, data)
        store.commit(`globalData/${id}/UPDATE`, { config: { ...config, id }, data });
      }
    })
  }
})

store.subscribe((mutation, state) => {
  if (mutation.type.indexOf('/UPDATE') != -1) {
    const { payload: { config }, type } = mutation
    if (config && config.children) {
      const moduleName = type.replace(/globalData\//g, '').replace(/\/UPDATE/g, '')
      config.children.map(childrenId => {
        const childrenConfig = globalDataConfig[childrenId]
        const mutationData = state.globalData[moduleName]
        const { processors = [] } = childrenConfig
        let finalResult = {}
        if (processors.length > 0) {
          const process = processors[0]
          const fn = new Function('result', process)
          finalResult = fn(mutationData)
        }
        store.commit(`globalData/${childrenId}/UPDATE`, { config: { ...childrenConfig, id: childrenId }, data: finalResult })
      })
    }
  }
})

// 缓存配置文件
store.commit('globalData/SET_DATASET', globalDataConfig)

function updateTopData () {
  const topDataId = '040CDF59-7826-0FFE-A3CB-A87C6657649A'
  const data = [{ "scenicId": "001", "scenicName": "瘦西湖团票", "scenicPicture": "http://dummyimage.com/300x600", "ticketCount": 12301, "in": 11001, "pct": 520, "carTotal": 12301 }]

  store.commit(`globalData/${topDataId}/UPDATE`, {
    config: globalDataConfig[topDataId],
    data
  })
}

store.watch(data => {
  const { data: count } = data.globalData['525EB075-77FF-A56A-F710-DE04E29F3495']
  console.log('store.watch', count)
  nextTick(() => {
    if (count === 3) {
      dataNumberRef.value.changeColor('red')
    }

    if (count === 2) {
      dataNumberRef.value.changeColor('orange')
    }

    if (count === 1) {
      dataNumberRef.value.changeColor('green')
    }
  })

})

</script>

<template>
  <DataNumber ref="dataNumberRef"></DataNumber>

  <HelloWorld msg="Vite + Vue" />

  <div style="border:1px dashed #ccc;margin-top: 20px;padding: 20px;">
    <div>
      [{"scenicId":"001","scenicName":"瘦西湖团票","scenicPicture":"http://dummyimage.com/300x600","ticketCount":12301,"in":11001,"pct":520,"carTotal":12301}]
    </div>
    <button @click="updateTopData">更新热销第一条</button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
