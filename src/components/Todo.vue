<template>
  <div class="card show shadow">
    <div class="card-body">
      {{item.id}}. {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
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