<template>
  <div class="card show shadow">
    <div class="card-body justify-content-between d-flex"  @click='markComplete'>
        <div :class="{'is-completed': check}">{{item.title}}</div>
        <button @click="$emit('del-todo', item.id)" class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  data() {
    return {
      check: false
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    markComplete() {
      this.check = !this.check
    }
  }
};
</script>

<style scoped>
  .is-completed {
    text-decoration: line-through;
  }
</style>