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
            <AddTodo @add-todo="addTodo"></AddTodo>
          </div>
          <div class="justify-content-between" :key="todo.id" v-for="todo in todos">
            <Todos :item="todo" class="py-4 my-4" @del-todo="deleteTodo" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import Todos from "@/components/Todo";
import AddTodo from "@/components/AddTodo";

export default {
  components: {
    Todos,
    AddTodo
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
    async fetchTodos() {
      let response = await Api.get("/todos/?_sort=title&_limit=" + this.limit);
      this.todos = response.data;
    },
    async addTodo(newTodo) {
      try {
        let response = await Api.post("/todos", newTodo);
        this.todos = [...this.todos, response.data];
      } catch (error) {
        console.error(error);
      }
    },
    deleteTodo(id) {
      Api.delete(`/todos/${id}`);
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>

<style>
</style>