<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="post mt-5 p-5 bg-white shadow rounded-lg">
          <h1 class="mb-5">{{ post.title }}</h1>
          <p>{{ post.body.repeat(5) }}</p>
        </div>
        <div class="comments mt-5">
          <h4>Comments ({{ comments.length }})</h4>
          <Comment :comment="comment" v-for="comment in comments" :key="comment.id" class="my-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import Comment from "@/components/Comment";

export default {
  name: "SinglePost",
  components: {
    Comment
  },
  data() {
    return {
      post: null,
      comments: null
    };
  },
  created() {
    this.fetchPost();
    this.fetchComments();
  },
  methods: {
    async fetchPost() {
      let response = await Api.get("/posts/" + this.$route.params["id"]);

      this.post = response.data;
    },
    async fetchComments() {
      let response = await Api.get(
        "/comments?postId=" + this.$route.params["id"]
      );
      console.log(response.data);
      this.comments = response.data;
    }
  }
};
</script>

<style>
</style>