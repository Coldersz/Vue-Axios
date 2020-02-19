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
    name: 'SinglePosts',
    component: () => import('../views/Post/SinglePost.vue')
  },
  {
    path: '/albums',
    name: 'Albums',
    component: () => import('../views/Albums.vue')
  },
  {
    path: '/photos',
    name: 'Photos',
    component: () => import('../views/Photos.vue')
  },
  {
    path: '/todos',
    name: 'Todos',
    component: () => import('../views/Todos.vue')
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
