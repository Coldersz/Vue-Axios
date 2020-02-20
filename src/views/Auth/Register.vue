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
    return {
    };
  },
  components: {
    RegisterForm
  },
  updated() {
    console.log("Updated");
  },
  methods: {
    async addUser(newUser) {
      try {
        let response = await User.register(newUser);

        if (response.status === "success") {
          this.$router.push("/login");
        } else {
          console.log("test");
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style>
</style>