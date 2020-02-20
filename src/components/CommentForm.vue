<template>
  <div>
    <form method="post" @submit.prevent="validate">
      <div class="form-group">
        <label for="body">Comment</label>
        <textarea
          name="body"
          id="body"
          cols="30"
          rows="10"
          class="form-control"
          :class="{'is-invalid': !body.is_valid}"
          v-model="body.data"
        ></textarea>
        <small id="helpId" class="text-muted">Your Comment</small>
      </div>
      <button type="submit" class="btn btn-primary">Comment</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CommentForm",
  props: {
    postId: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      body: {
        data: "",
        isValid: true
      }
    };
  },
  methods: {
    validate() {
      if (this.body.data.length <= 0) {
        this.body.isValid = false;
        return;
      }

      const data = {
        postId: this.postId,
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        body: this.body.data
      };

      this.$emit("add-comment", data);

      // Resets the comment form
      this.body.data = "";
      this.body.isValid = true;
    }
  }
};
</script>

<style>
</style>