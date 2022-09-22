import { createRouter, createWebHashHistory } from 'vue-router'
import CesiumContainer from '../views/CesiumContainer.vue'
const routes = [
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
