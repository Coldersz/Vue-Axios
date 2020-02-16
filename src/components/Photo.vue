<template>
  <div class="post card shadow border-0">
    <div class="card-body">
      <center>
        <h4 class="card-title">{{item.title}}</h4>
        <img :src="item.url" class="rounded-lg" style="height: 200px;" />
      </center>
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