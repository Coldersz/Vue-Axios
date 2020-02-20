<template>
  <center>
    <div class="card  col-6 mt-lg-5 shadow-lg">
      <h1 class="my-5">Register</h1>
      <form @submit="addUser">
        <div class="form-group">
          <input type="text" v-model="name" class="form-control col-8" placeholder="Name" />
          <input type="text" v-model="username" class="form-control col-8" placeholder="Username" />
          <input type="email" v-model="email" class="form-control col-8" placeholder="Email" />
          <input type="password" v-model="password" class="form-control col-8" placeholder="Password" />
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
    addUser(e) {
      e.preventDefault();
      const newUser = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password
      };
      this.$emit("add-user", newUser);
      this.name = "";
      this.username = "";
      this.email = "";
      this.password = "";
    }
  }
};
</script>

<style scoped>
input {
    margin-top: 15px;
}
</style>