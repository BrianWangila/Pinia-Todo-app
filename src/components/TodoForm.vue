<template>
  <main>
    <h3>Add Task</h3>
    <form @submit.prevent="handleSubmit">
      <input type="text" placeholder="Task title here" v-model="newTask.title">
      <input class="input-2" type="text" placeholder="Task description here" v-model="newTask.details">
      <input type="submit" value="Add Task">
    </form>
  </main>
</template>


<script>
  import { useTaskStore } from '@/stores/taskStore';

  export default {
    name: "TodoForm",
    data(){
      return {
        taskStore: useTaskStore(),
        newTask: {
          title: "",
          details: "",
          isFav: false
        }
      }
    },

    methods: {
      handleSubmit(){
        if(this.newTask.title.length > 0){
          this.taskStore.addTask(this.newTask)

          this.newTask = {
            title: "",
            details: ""
          }
        }
        
      }
    }

  }

</script>


<style scoped>
  main {
    margin: 15px;

  }

  form {
    background-color: rgba(221, 215, 215, 0.589);
    min-height: 10rem;
    width: 25rem;
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

  }

  form input {
    width: 23rem;
    margin: auto;
    margin-bottom: 20px;
    height: 30px;
    border: 1px solid rgb(179, 180, 178)  ;
    border-radius: 5px;
    }

    form .input-2 {
      height: 100px;
      text-align: start;
    }


    form input:last-child {
      color: greenyellow;
      background-color: black;
      height: 35px;
    }
</style>