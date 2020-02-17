<template>
  <div>
    <form method="post" @submit.prevent="validate">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input
          type="text"
          name="name"
          id="name"
          class="form-control"
          :class="{'is-invalid': !name.is_valid}"
          placeholder
          aria-describedby="helpId"
          v-model="name.data"
        />
        <small id="helpId" class="text-muted">John Doe</small>
      </div>
      <div class="form-group">
        <label for="name">Your Email</label>
        <input
          type="text"
          name="email"
          id="name"
          class="form-control"
          :class="{'is-invalid': !email.is_valid}"
          placeholder
          aria-describedby="helpId"
          v-model="email.data"
        />
        <small id="helpId" class="text-muted">example@gmail.com</small>
      </div>
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
      name: {
        data: "",
        is_valid: true
      },
      email: {
        data: "",
        is_valid: true
      },
      body: {
        data: "",
        is_valid: true
      }
    };
  },
  methods: {
    validate() {
      for (const values of Object.values(this.$data)) {
        if (values.data.length <= 0) {
          values.is_valid = false;
          return;
        }
      }

      const data = {
        postId: this.postId,
        name: this.name.data,
        email: this.email.data,
        body: this.body.data
      };

      this.$emit("add-comment", data);

      // Resets the comment form
      for (const values of Object.values(this.$data)) {
        values.data = "";
        values.is_valid = true;
      }
    }
  }
};
</script>

<style>
</style>