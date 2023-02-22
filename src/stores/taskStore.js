import { defineStore } from "pinia";
import { v4 as uuid } from "uuid";
import axios from 'axios';



export const useTaskStore = defineStore("taskStore", {

  //state
  state: () => ({
    tasks: [],
    isLoading: false
  }),


  //getters
  getters: {
    favorites(){
      return this.tasks.filter((task) => {
        return task.isFav
      })

    },

    // count number of favorite items
    favCount(){
      return this.tasks.reduce((prev, curr) => {
        return curr.isFav ? prev + 1 : prev
      }, 0)
    },

    // count the total items in the array
    totalCount: (state) => {
      return state.tasks.length
    }
  },


  //actions
  actions: {

    getTask(){
      this.isLoading = true
      try {
        // const res = await fetch("http://localhost:3000/tasks")
        // const data = await res.json()
        // this.tasks = data

        axios.get("http://localhost:3000/tasks")
          .then((res) => {
            this.tasks = res.data
          })

          this.isLoading = false

      } catch (error) {
        console.log(error)
      }
    },

    async addTask(task){
      this.tasks.push({
        id: uuid(),
        ...task})

        try {
          await axios.post("http://localhost:3000/tasks", task, {headers: {"Content-Type": "application/json"}} )
        
        } catch (error) {
          console.log(error)
        }

    },

    async deleteTask(id){
      try {
        await axios.delete("http://localhost:3000/tasks/" + id)
        
        this.tasks = this.tasks.filter((task) => {
          return task.id !== id
        })

      } catch (error) {
        console.log(error)
      }
    },

    async toggleFav(id){
      const task = this.tasks.find((task) => {
        return task.id === id
      })
      task.isFav = !task.isFav

      try {
        const data = {
          isFav: task.isFav
        }
        await axios.patch("http://localhost:3000/tasks/" + id, data)

       
  
      } catch (error) {
        console.log(error)
      }
    }
  }
})

