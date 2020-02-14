<template>
  <div class="post card shadow border-0">
    <div class="card-body">
      <h4 class="card-title">
        <router-link :to="'/posts/' + $vnode.key">{{ item.title }}</router-link>
      </h4>
      <div class="card-text">{{ item.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    item: {
      required: true,
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  .card-title {
  }

  .card-text {
  }
}
</style>