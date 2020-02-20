<template>
  <div class="card show shadow">
    <div class="card-body justify-content-between d-flex" @click="markComplete">
      <div :class="{'is-completed': check}" v-show="!edit">{{item.title}}</div>
      <div>
        <button @click="change" class="btn btn-info mr-2" v-show="!edit">Edit</button>
        <button @click="$emit('del-todo', item.id)" class="btn btn-danger" v-show="!edit">Delete</button>
      </div>
    </div>
    <form class="container" method="post" v-show="edit" @submit.prevent="update(item)">
      <div class>
        <input type="hidden" v-model="item.id" />
        <input type="text" class="form-control" v-model="item.title" />
        <button type="submit" class="btn btn-info mt-2">Edit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Api from "@/services/api";

export default {
  name: "Todo",
  data() {
    return {
      check: false,
      edit: false,
      todos: null
    };
  },
  created() {
    this.load();
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    markComplete() {
      this.check = !this.check;
    },
    load() {
      Api.get("/todos/").then(res => (this.todos = res.data));
    },
    change() {
      this.edit = true;
    },
    async update() {
      try {
      let response = await Api.patch("/todos/" + this.item.id, { title: this.item.title });
          this.load();
          this.check = false;
          this.edit = false;
          return response
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style scoped>
.is-completed {
  text-decoration: line-through;
}
</style>