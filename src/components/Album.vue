<template>
  <div class="album">
    <div class="card">
      <div class="card-body">
        <h4 class="card-title">{{ album.title }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Album",
  props: {
    album: {
      required: true,
      type: Object
    }
  }
};
</script>

<style>
</style>