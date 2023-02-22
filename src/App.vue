<template>
  <div>
    <h2>Using Pinia for State Management</h2>
    <TeamManagement />
    <TodoApp />
  </div>
</template>

<script>
  import TeamManagement from './components/TeamManagement.vue'
  import TodoApp from './components/TodoApp.vue'
  
  export default {
    name:"App",
    components: {
      TeamManagement,
      TodoApp,
    }
  }
</script>