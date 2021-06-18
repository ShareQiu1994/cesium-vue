<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-15 15:08:22
 * @LastEditTime: 2021-06-18 08:55:24
-->
<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { onMounted } from 'vue'
import { Viewer } from 'cesium'

export default {
  name: 'CesiumContainer',
  setup() {
    onMounted(() => {
      /* eslint no-new: */
      new Viewer('cesiumContainer')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
