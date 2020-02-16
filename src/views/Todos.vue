<template>
  <div class="photos">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-8">
          <div class="mt-3">
            <h1>Todos</h1>
            <div class="d-flex justify-content-between align-items-baseline">
              <p>Showing {{limit}} Todo list</p>
              <select name="limit" v-model="limit" @change="fetchTodos">
                <option value="5" selected>5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          <Todos :item="todo" v-for="todo in todos" :key="todo.id" class="py-4 my-4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import Todos from "@/components/Todo";

export default {
  components: {
    Todos
  },
  data() {
    return {
      limit: 5,
      todos: null
    };
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    fetchTodos() {
      Api({
        method: "GET",
        url: "/todos?_limit=" + this.limit
      })
        .then(({ data }) => (this.todos = data))
        // .then(({ data }) => console.log(data))
        .catch(({ err }) => console.log(err));
    }
  }
};
</script>

<style>
</style>