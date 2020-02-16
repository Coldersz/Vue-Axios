<template>
  <div>
    <div class="users">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="mt-3">
              <h1>Users</h1>
            </div>
            <User :item="user" v-for="user in users" :key="user.id" class="py-4 my-4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import User from "@/components/User";

export default {
  components: {
    User
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
  updated() {
    console.log("updated");
  },
  methods: {
    fetchUsers() {
      Api({
        method: "GET",
        url: "/users"
      })
        .then(({ data }) => (this.users = data))
        // .then( ({data}) => console.log(data) )
        .catch(({ err }) => console.log(err));
    }
  }
};
</script>

<style>
</style>