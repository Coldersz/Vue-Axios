<template>
  <div class="login mt-5 pt-5">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 mx-auto">
          <form method="POST" class="shadow p-5 rounded-lg" @submit.prevent="validate">
            <h1 class="mb-5">Login</h1>
            <div class="form-group mb-4">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                id="email"
                class="form-control rounded-pill"
                placeholder
                aria-describedby="helpId"
                v-model="email"
              />
              <small id="helpId" class="text-muted">example@gmail.com</small>
            </div>
            <div class="form-group mb-4">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                class="form-control rounded-pill"
                placeholder
                aria-describedby="helpId"
                v-model="password"
              />
              <small id="helpId" class="text-muted">We won't tell anyone about your password</small>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary rounded-pill px-5">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "@/services/auth";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async validate() {
      let response = await Auth.login(this.email, this.password);

      if (response.status === "failed") {
        return alert("Failed to login");
      }

      localStorage.setItem("token", response.token);
      localStorage.setItem("name", response.name);
      localStorage.setItem("username", response.username);
      localStorage.setItem("email", response.email);

      this.$router.push(this.$route.query.redirect || "/");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>