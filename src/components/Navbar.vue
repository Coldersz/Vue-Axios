<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Navbar</router-link>
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/posts">Posts</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/albums">Albums</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/photos">Photos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/todos">Todos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/users">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>