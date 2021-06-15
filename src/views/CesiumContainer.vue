<!--
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-15 14:04:28
 * @LastEditTime: 2021-06-15 14:25:43
-->
<template>
  <div id="cesiumContainer"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { Viewer } from 'cesium'

export default defineComponent({
  name: 'CesiumContainer',
  mounted () {
    /* eslint no-new: */
    new Viewer('cesiumContainer')
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
