<template>
  <div>
    <form method="POST" @submit.prevent="validate">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          class="form-control"
          aria-describedby="helpId"
          v-model="title.data"
          :class="{'is-invalid': !title.is_valid}"
        />
        <small id="helpId" class="text-muted">The title of the post</small>
      </div>
      <div class="form-group">
        <label for="body">Content</label>
        <textarea
          type="text"
          name="body"
          id="body"
          class="form-control"
          cols="30"
          rows="10"
          aria-describedby="helpId"
          v-model="body.data"
          :class="{'is-invalid': !body.is_valid}"
        ></textarea>
        <small id="helpId" class="text-muted">The content of the post</small>
      </div>
      <button type="submit" class="btn btn-primary">Save Changes</button>
      <button type="button" class="btn btn-danger ml-4" @click="$emit('discard-changes')">Cancel</button>
    </form>
  </div>
</template>

<script>
import Api from "@/services/api";

export default {
  name: "EditPost",
  data() {
    return {
      title: {
        data: "",
        is_valid: true
      },
      body: {
        data: "",
        is_valid: true
      }
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      try {
        let { data } = await Api.get("/posts/" + this.$route.params["id"]);

        this.title.data = data.title;
        this.body.data = data.body;
      } catch (error) {
        console.log(error);
      }
    },
    validate() {
      for (const values of Object.values(this.$data)) {
        if (values.data.length <= 0) {
          values.is_valid = false;
          return;
        }
      }

      const data = {
        title: this.title.data,
        body: this.body.data
      };

      this.$emit("edit-post", data);
    }
  }
};
</script>

<style>
</style>