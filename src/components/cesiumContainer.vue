<template>
   <div id="cesiumContainer">
   </div>
</template>

<script>
import Cesium from 'cesium/Cesium'; 
import  widgets from'cesium/Widgets/widgets.css';

export default {
  name: 'cesiumContainer',
  mounted(){
  	 var viewer = new Cesium.Viewer('cesiumContainer');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>