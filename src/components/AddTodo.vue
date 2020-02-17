<template>
  <div class="jumbotron">
    <h1 class>Add new todos</h1>
    <form @submit="addTodo">
      <div class="form-group">
        <input
          type="text"
          v-model="title"
          class="form-control col-8"
          placeholder="Type new todos here"
        />
        <button type="submit" class="btn btn-primary mt-2 px-3">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      const newTodo = {
        title: this.title
      };
      this.$emit("add-todo", newTodo);
      this.title = "";
    }
  }
};
</script>

<style>
</style>