import Vue from 'vue'
import VueRouter from 'vue-router'
import CesiumContainer from '@/views/CesiumContainer.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cesiumContainer',
    component: CesiumContainer
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
