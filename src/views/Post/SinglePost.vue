<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8">
        <section class="post mt-5 p-5 bg-white shadow rounded-lg">
          <div v-show="!edit">
            <div class="d-flex justify-content-between align-items-baseline">
              <h3 class="mb-5">{{ post.title }}</h3>
              <div class="dropdown open">
                <a
                  type="button"
                  id="triggerId"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src="@/assets/icons/more-vertical.svg" alt />
                </a>
                <div class="dropdown-menu" aria-labelledby="triggerId">
                  <button class="dropdown-item" @click="edit = !edit">Edit</button>
                </div>
              </div>
            </div>
            <p>{{ post.body }}</p>
          </div>
          <EditPostForm v-show="edit" @edit-post="editPost" @discard-changes="edit = !edit" />
        </section>
        <div class="comments mt-5">
          <CommentForm :post-id="post.id" @add-comment="addComment" />
          <h4 class="mt-5">Comments ({{ comments.length }})</h4>
          <Comment :comment="comment" v-for="comment in comments" :key="comment.id" class="my-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";
import EditPostForm from "@/components/EditPostForm";

export default {
  name: "SinglePost",
  components: {
    Comment,
    CommentForm,
    EditPostForm
  },
  data() {
    return {
      post: null,
      comments: null,
      edit: false
    };
  },
  created() {
    this.fetchPost();
    this.fetchComments();
  },
  methods: {
    async fetchPost() {
      try {
        let { data } = await Api.get("/posts/" + this.$route.params["id"]);

        this.post = data;
      } catch (error) {
        console.log(error);
      }
    },
    async editPost(newPost) {
      try {
        let { data } = await Api.put(
          "/posts/" + this.$route.params["id"],
          newPost
        );

        this.post = data;
        this.edit = false;
      } catch (error) {
        console.log(error);
      }
    },
    async fetchComments() {
      try {
        let { data } = await Api.get(
          "/posts/" + this.$route.params["id"] + "/comments"
        );

        this.comments = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addComment(newComment) {
      try {
        let response = await Api.post("/comments", newComment);

        this.comments = [...this.comments, response.data];
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>