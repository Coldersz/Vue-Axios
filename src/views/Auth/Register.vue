<template>
  <div class="container">
    <RegisterForm @add-user="addUser"></RegisterForm>
  </div>
</template>

<script>
// import Api from "@/services/api"
import RegisterForm from "@/components/RegisterForm";
import User from "@/services/auth";

export default {
  data() {
    return {};
  },
  components: {
    RegisterForm
  },
  methods: {
    async addUser(newUser) {
      let response = await User.register(newUser);

      if (response.data.status === "success") {
        this.$router.push("/login");
      }
    }
  }
};
</script>

<style>
</style>