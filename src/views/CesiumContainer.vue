<template>
  <div id="cesiumContainer"></div>
</template>

<script>
import 'cesium/Widgets/widgets.css'
const Cesium = require('cesium/Cesium')

export default {
  name: 'CesiumContainer',
  mounted() {
    /* eslint no-new: */
    new Cesium.Viewer('cesiumContainer')
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
