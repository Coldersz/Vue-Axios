import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import Auth from "../services/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/posts",
    name: "Posts",
    meta: {
      auth: true
    },
    component: () => import("../views/Post/Posts.vue")
  },
  {
    path: "/posts/:id",
    name: "SinglePosts",
    meta: {
      auth: true
    },
    component: () => import("../views/Post/SinglePost.vue")
  },
  {
    path: "/albums",
    name: "Albums",
    meta: {
      auth: true
    },
    component: () => import("../views/Albums.vue")
  },
  {
    path: "/photos",
    name: "Photos",
    meta: {
      auth: true
    },
    component: () => import("../views/Photos.vue")
  },
  {
    path: "/todos",
    name: "Todos",
    meta: {
      auth: true
    },
    component: () => import("../views/Todos.vue")
  },
  {
    path: "/users",
    name: "Users",
    meta: {
      auth: true
    },
    component: () => import("../views/Users.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Auth/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Auth/Register.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!Auth.isLoggedIn()) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
