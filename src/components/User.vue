<template>
  <div class="post card shadow border-0">
    <div class="card-body">
      <h4 class="card-title">
        User {{item.id}}
      </h4>
      <p>Name : {{item.name}}</p>
      <p>Username : {{item.username}}</p>
      <p>Email : {{item.email}}</p>
      <p>Password : {{item.password}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Photo",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>