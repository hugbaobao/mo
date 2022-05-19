import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home/Home.vue'

Vue.use(VueRouter)

// 避免相同地址互相跳转时报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  { path: '/', redirect: '/Home' },
  { path: '/home', component: Home },
  { path: '/first', component: () => import('@/views/first/First.vue') },
  { path: '/first2', component: () => import('@/views/first/first-S.vue') },
  { path: '/first3', component: () => import('@/views/first/first-T.vue') },
  { path: '/second', component: () => import('@/views/second/Second.vue') },
  { path: '/second2', component: () => import('@/views/second/seconde-S.vue') },
  { path: '/second3', component: () => import('@/views/second/second-T.vue') },
  { path: '/second4', component: () => import('@/views/second/second-F.vue') },
  { path: '/third', component: () => import('@/views/third/Third.vue') },
  { path: '/third2', component: () => import('@/views/third/third-S.vue') },
  { path: '/fourth', component: () => import('@/views/fourth/Fourth.vue') },
  { path: '/five', component: () => import('@/views/five/Five.vue') },
  { path: '/six', component: () => import('@/views/six/Six.vue') },
  { path: '/seven', component: () => import('@/views/seven/Seven.vue') },
  { path: '/eight', component: () => import('@/views/eight/Eight.vue') }
]

const router = new VueRouter({
  routes
})

export default router
