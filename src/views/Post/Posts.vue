<template>
  <div class="posts">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="mt-3">
            <h1>Posts</h1>
            <div class="d-flex justify-content-between align-items-baseline">
              <p>Showing {{ limit }} posts</p>
              <select name="limit" v-model="limit" @change="fetchPosts">
                <option value="5" selected>5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          <Post :item="post" v-for="post in posts" :key="post.id" class="py-4 my-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import Post from "@/components/Post";

export default {
  components: {
    Post
  },
  data() {
    return {
      posts: null,
      limit: 5
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      let response = await Api.get("/posts?_limit=" + this.limit);

      this.posts = response.data;
    }
  }
};
</script>

<style>
</style>