/*
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-15 13:56:00
 * @LastEditTime: 2021-06-15 14:13:26
 */
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
