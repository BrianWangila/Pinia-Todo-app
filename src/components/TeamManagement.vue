<template>
  <main style="margin-bottom: 10vh;">
    <h2>Team Management App</h2>
    <form @submit.prevent="CreateUser">
      <input type="text" placeholder="Your name" v-model="user_input.name">
      <input type="email" placeholder="Your email" v-model="user_input.email">
      <input type="submit" value="Create user">
    </form>

    <label><span>Sort</span><input type="checkbox" v-model="sort"></label>

    <div class="users" v-if="!sort">
      <div v-for="user in user_store.users" :key="user.id" class="user">
        <button @click="deleteUser(user.id, user.name)">x</button>
        <h3>Name: {{user.name}}</h3>
        <p>Email: {{user.email}}</p>
        
      </div>
    </div>

    <div class="users" v-else>
      <div v-for="user in user_store.usersByName" :key="user.id" class="user">
        <button @click="deleteUser(user.id, user.name)">x</button>
        <h3>Name: {{user.name}}</h3>
        <p>Email: {{user.email}}</p>
       
      </div>
    </div>
  </main>
</template>

<script>
  import { useUserStore } from "../stores/users"

  export default{
    name: "TeamManagement",
    components: {

    },
    data() {
      return {
        user_store: useUserStore(),
        sort: false,
        user_input: {
          name: "",
          email: "",
        }
      };
    },
    methods: {

      CreateUser(){
        if(!this.user_input.name || !this.user_input.email){
          return alert("Please enter both name and email")
        }

        this.user_store.create(this.user_input)

        this.user_input = {
          name: "",
          email: ""
        }
      },
      deleteUser(id, name){
        this.user_store.delete(id)
        alert(name + " has been removed successfully")
      }

    }
  }

  
</script>


<style scoped>
  .user {
    background-color: rgba(198, 194, 194, 0.326);
    margin-bottom: 10px;
    width: 30vw;
    padding: 10px;
    margin-top: 5px;
  }

</style>