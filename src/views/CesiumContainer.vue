<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import 'cesium/Build/Cesium/Widgets/widgets.css'
import { Viewer } from 'Cesium'

export default {
  name: 'CesiumContainer',
  mounted() {
    /* eslint no-new: */
    new Viewer('cesiumContainer')
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
