<template>
  <div class="comment">
    <div class="card text-left">
      <div class="card-body">
        <h4 class="card-title">{{ comment.name }}</h4>
        <small class="text-muted">{{ comment.email }}</small>
        <p class="card-text">{{ comment.body }}</p>
        <small class="text-muted">{{ since }}</small>
        <div class="card text-left" v-for="reply in replies" :key="reply.id">
          <div class="card-body">
            <h4 class="card-title">{{ reply.name }}</h4>
            <small class="text-muted">{{ reply.email }}</small>
            <p class="card-text">{{ reply.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import DateUtil from "../utils/date";

export default {
  name: "Comment",
  props: {
    comment: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      replies: null
    };
  },
  mounted() {
    this.fetchReplies();
  },
  computed: {
    since() {
      return DateUtil.since(new Date());
    }
  },
  methods: {
    async fetchReplies() {
      try {
        let response = await Api.get(`/replies/?commentId=${this.comment.id}`);

        this.replies = response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>