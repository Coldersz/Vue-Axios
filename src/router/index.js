import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    component: () => import('../views/Post/Posts.vue')
  },
  {
    path: '/posts/:id',
    name: 'Posts',
    component: () => import('../views/Post/SinglePost.vue')
  },
  {
    path: '/albums',
    name: 'Albums',
    component: () => import('../views/Album.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
