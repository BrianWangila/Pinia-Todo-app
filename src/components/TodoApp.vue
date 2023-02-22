<template>
  <main>
    <h2>ToDo List</h2>


    <TodoForm />
    <TodoList />
  </main>
</template>


<script>
  import TodoForm from "./TodoForm.vue";
  import TodoList from "./TodoList.vue";

  export default {
    name: "TodoApp",
    components: {
      TodoForm,
      TodoList,
    }
  }
</script>