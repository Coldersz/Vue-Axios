<template>
  <div class="mx-auto col-6 mt-5 pt-5 shadow">
    <div class="container">
      <form @submit.prevent="addUser">
        <h1 class="mb-5">Register</h1>
        <div class="form-group">
          <!-- <label for="name">Name</label> -->
          <input
            type="text"
            name="name"
            class="form-control  rounded-pill"
            placeholder="Name"
            id="name"
            v-model="name"
          />
          <input
            type="text"
            class="form-control  rounded-pill"
            placeholder="Username"
            v-model="username"
          />
          <input
            type="text"
            class="form-control  rounded-pill"
            placeholder="Email"
            v-model="email"
          />
          <input
            type="password"
            class="form-control  rounded-pill"
            placeholder="Password"
            v-model="password"
          />
          <div class="mx-auto">
            <button
              type="submit"
              class="text-center btn btn-primary rounded-pill mt-5 px-5 mb-5"
            >Register</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async addUser() {
      const newUser = await {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.$emit("add-user", newUser);
    }
  }
};
</script>

<style scoped>
input {
  margin-top: 15px;
}
</style>