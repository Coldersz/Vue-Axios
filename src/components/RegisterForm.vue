<template>
  <center>
    <div class="card col-6 mt-lg-5 shadow-lg">
      <h1 class="my-5">Register</h1>
      <form @submit.prevent="addUser">
        <div class="form-group">
          <input type="text" class="form-control col-8" placeholder="Name" v-model="name" />
          <input type="text" class="form-control col-8" placeholder="Username" v-model="username" />
          <input type="text" class="form-control col-8" placeholder="Email" v-model="email" />
          <input
            type="password"
            class="form-control col-8"
            placeholder="Password"
            v-model="password"
          />
          <button type="submit" class="btn btn-primary mt-5 px-3">Register</button>
        </div>
      </form>
    </div>
  </center>
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
    addUser() {
      const newUser = {
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