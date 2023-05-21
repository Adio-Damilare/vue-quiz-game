<template>
   <p>
    hheee

       {{ id }} {{ $route.params.jobId }}
       {{ jobId }}
    </p>
</template>

<script lang="ts">
    export default{
        props:["jobId"],

        data(){
            return {
                id:this.$route.params.jobId
            }
        }
    }
</script>