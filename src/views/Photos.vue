<template>
  <div>
    <div class="photos">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="mt-3">
              <h1>Photos</h1>
              <div class="d-flex justify-content-between align-items-baseline">
                <p>Showing {{ limit }} photos</p>
                <keep-alive>
                  <select name="limit" v-model="limit" @change="fetchPhotos">
                    <option value="5" selected>5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </keep-alive>
              </div>
            </div>
            <Photo :item="photo" v-for="photo in photos" :key="photo.id" class="py-4 my-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import Photo from "@/components/Photo";

export default {
  components: {
    Photo
  },
  data() {
    return {
      limit: 5,
      photos: null
    };
  },
  created() {
    this.fetchPhotos();
  },
  methods: {
    fetchPhotos() {
      Api({
        method: "GET",
        url: "/photos?_limit=" + this.limit
      })
        .then(({ data }) => (this.photos = data))
        .catch(({ err }) => console.log(err));
    }
  }
};
</script>

<style>
</style>