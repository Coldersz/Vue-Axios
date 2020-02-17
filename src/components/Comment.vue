<template>
  <div class="comment">
    <div class="card text-left">
      <div class="card-body">
        <h4 class="card-title">{{ comment.name }}</h4>
        <small class="text-muted">{{ comment.email }}</small>
        <p class="card-text">{{ comment.body }}</p>
        <small class="text-muted">{{ since }}</small>
      </div>
    </div>
  </div>
</template>

<script>
import DateUtil from "../utils/date";

export default {
  name: "Comment",
  props: {
    comment: {
      required: true,
      type: Object
    }
  },
  computed: {
    since() {
      return DateUtil.since(new Date());
    }
  }
};
</script>

<style>
</style>