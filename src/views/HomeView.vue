
<template>
  <main>
    <TheWelcome />
    <div v-for="user in data" v-bind:key=" user?.id">
    <p> {{user?.name}}</p>

    </div>
  </main>
</template>

  <script   lang="ts">
  import TheWelcome from '../components/TheWelcome.vue'
  import axios from "axios"
  export default{
    data(){
      return{
        url:"https://jsonplaceholder.typicode.com/users",
        data:[] as any
      }
    },
    mounted(){
      this.getUsers()
    },
    methods:{
      getUsers(){
        axios.get(this.url).then((res)=>this.data=res.data)

      }
  
    }
  }
  </script>