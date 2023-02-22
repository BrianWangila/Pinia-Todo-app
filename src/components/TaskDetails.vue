<template>
  <div>
    <ul>
      <div class="title">
        <h4>{{ task.title }}</h4>
        <div>
          <i 
            class="material-icons"
            @click="taskStore.deleteTask(task.id)">
            delete
          </i>
          <i 
            class="material-icons"
            @click="taskStore.toggleFav(task.id)" 
            :class="{active: task.isFav}" 
            >
            favorite
          </i>
        </div>
      </div>
      <li>{{ task.details}}</li>
    </ul>
  </div>
</template>


<script>
  import { useTaskStore } from '@/stores/taskStore'

  export default {
    data(){
      return {
        taskStore: useTaskStore(),
      }
    },
    props: [
      "task",
    ],
  }

</script>


<style scoped>
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.title i {
  margin-right: 15px;
  color: grey;
  cursor: pointer;
}

.title .active {
  color: #e01a1a;
}



</style>