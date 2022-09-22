<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { onMounted } from 'vue'
import { Viewer } from 'cesium' // OR  /* import * as Cesium from 'cesium' */

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
