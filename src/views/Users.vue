<template>
  <div>
    <div class="users">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="mt-3">
              <h1>Users</h1>
            </div>
            <!-- <Reg @add-user=addUser></Reg> -->
            <UserCard :item="user" v-for="user in users" :key="user.id" class="py-4 my-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import UserCard from "@/components/User";
// import Reg from "@/components/RegisterForm";

export default {
  components: {
    UserCard
    // Reg
  },
  data() {
    return {
      limit: 5,
      users: null
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      let response = await Api.get("/users");
      this.users = response.data;
    },
    
    
  }
};
</script>

<style>
</style>