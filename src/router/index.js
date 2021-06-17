/*
 * @version: 1.0.0
 * @Author: liubofang<421419567@qq.com>
 * @Date: 2021-06-15 13:56:00
 * @LastEditTime: 2021-06-17 11:40:35
 */
import { createRouter, createWebHashHistory } from "vue-router";
import CesiumContainer from "../views/CesiumContainer.vue";
const routes = [
  {
    path: "/",
    name: "CesiumContainer",
    component: CesiumContainer
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
