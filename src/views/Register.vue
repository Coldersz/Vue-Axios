<template>
  <div class="container">
    <Reg @add-user="addUser"></Reg>
  </div>
</template>

<script>
import Reg from "@/components/RegisterForm";
import User from "@/services/register";

export default {
  data() {
    return {};
  },
  components: {
    Reg
  },
  methods: {
    async addUser(newUser) {
      let response = await User.register(newUser);
      return response;
    }
  }
};
</script>

<style>
</style>