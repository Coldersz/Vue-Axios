<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="mt-5">Albums</h1>
        <Album :album="album" v-for="album in albums" :key="album.id" class="my-4"/>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import Album from "@/components/Album";

export default {
  name: "Albums",
  components: {
    Album
  },
  data() {
    return {
      albums: null
    };
  },
  created() {
    this.fetchAlbums();
  },
  methods: {
    async fetchAlbums() {
      let response = await Api.get("/albums");

      this.albums = response.data;
    }
  }
};
</script>

<style>
</style>