<template>
    
    <div class="">
        welcome to jobs component
        
        <div v-for="job in jobs" :key="job.id">
            <RouterLink :to="'/jobs/'+job.id">
                <h4>{{ job.name }}</h4>
            </RouterLink>

        </div>
    </div>
</template>

<script lang="ts">
    // import { ref, reactive } from 'vue';

    export default {
        
        data(){
            return{
                jobs:[
                    {
                        name:"software devloper", id:1,details:"Fullstack software developer"
                    },
                    {
                        name:"data scientist", id:2,details:"Google certified data scientist"
                    },
                    {
                        name:"Chef", id:3,details:"International chef"
                    }
                ]
            }
        }
    }
</script> 

 <style lang="en" scoped>

</style>