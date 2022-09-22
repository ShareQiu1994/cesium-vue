import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import CesiumContainer from '../views/CesiumContainer.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'CesiumContainer',
    component: CesiumContainer
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
