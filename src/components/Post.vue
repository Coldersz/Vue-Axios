<template>
  <div class="post card shadow border-0">
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-baseline">
        <h4 class="card-title">
          <router-link :to="'/posts/' + item.id">{{ item.title }}</router-link>
        </h4>
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
          <button class="dropdown-item" @click="$emit('delete-post', item.id)">Delete Post</button>
        </div>
      </div>
      <div class="card-text">{{ item.body }}</div>
    </div>
    <div class="comment-box mt-5 p-4">
      <div class="comment" v-for="comment in comments.slice(0, 3)" :key="comment.id">
        <div class="d-flex justify-content-between align-items-baseline">
          <strong>{{ comment.name.substring(0, 6) }}</strong>
          <p class="ml-4">{{ comment.body }}</p>
        </div>
      </div>
    </div>
    <form method="post" @submit.prevent="addComment">
      <div class="form-group">
        <input
          type="text"
          name="comment"
          id="comment"
          class="form-control border-0"
          placeholder="Add a comment..."
          v-model="newComment.body"
        />
        <input type="submit" class="d-none" />
      </div>
    </form>
  </div>
</template>

<script>
import Api from "@/services/api";
import String from "../utils/string";

export default {
  name: "Post",
  props: {
    item: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      comments: null,
      newComment: {
        postId: this.item.id,
        name: String.random(),
        email: String.email(),
        body: ""
      }
    };
  },
  created() {
    this.fetchComments();
  },
  methods: {
    async fetchComments() {
      try {
        let { data } = await Api.get(`/posts/${this.item.id}/comments`);

        this.comments = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addComment() {
      try {
        // eslint-disable-next-line
        let response = await Api.post("/comments", this.newComment);
        this.$router.push(`/posts/${this.item.id}`);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-box {
  background: #edf2f7;
}
</style>