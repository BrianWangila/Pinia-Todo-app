<template>
  <main>

    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Favorites</button>
    </nav>


    <!-- loading -->
    <div class="loading" v-if="taskStore.isLoading">
      Loading tasks...
    </div>


    <!-- Show all tasks -->
    <div class="task-list" v-if="filter === 'all'">
      <h3>Your Tasks <span style="color: orange; padding-left: 5px;">({{ taskStore.totalCount }})</span></h3>
      <div v-for="task in taskStore.tasks" :key="task.id">
        <TaskDetailsVue :task="task"/>
      </div>
    </div>
    

    <!-- Favorite tasks -->
    <div class="task-list" v-if="filter === 'favs'">
      <h3>Favorite Tasks <span style="color: orange; padding-left: 5px;">({{ taskStore.favCount }})</span></h3>
      <div v-for="task in taskStore.favorites" :key="task.id">
        <TaskDetailsVue :task="task"/>
      </div>
    </div>
  </main>
</template>mounted() {
  this.taskStore.getTask()
},


<script>
  import { useTaskStore } from '@/stores/taskStore';
  import TaskDetailsVue from '@/components/TaskDetails.vue';

  
  export default {
    components: {
      TaskDetailsVue,
    },
    data(){
      return{
        taskStore: useTaskStore(),
        filter: "all",
      }
    },
    mounted() {
      this.taskStore.getTask()
    },
 
  }
</script>


<style scoped>
  .task-list {
    border: 1px solid #e0d9d9;
    background-color: #efe8e85a;
    margin-bottom: 5px;
    width: 30rem;
    margin-left: 15px;
    border-radius: 15px;
  }


  .task-list h3 {
    text-align: center;
  }

  .filter button {
    margin: 10px 5px;
    height: 25px;
    border: 1px solid #999595;
    background-color: #efe8e85a;
    border-radius: 5px;
    width: 80px;
  }

  .filter {
    margin-left: 20rem;
  }

  
</style>