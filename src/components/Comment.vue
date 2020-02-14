<template>
  <div class="comment">
    <div class="card text-left">
      <div class="card-body">
        <h4 class="card-title">{{ comment.name }}</h4>
        <small class="text-muted">{{ comment.email }}</small>
        <p class="card-text">{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: {
      required: true,
      type: Object
    }
  }
};
</script>

<style>
</style>