import Vue from 'vue'
import Router from 'vue-router'
import cesiumContainer from '@/components/cesiumContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cesiumContainer',
      component: cesiumContainer
    }
  ]
})
