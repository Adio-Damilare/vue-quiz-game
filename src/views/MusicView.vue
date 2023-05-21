<template>

    <div v-for="{title, id,artist, duration} in data" :key="id">
        <p>{{title  }}</p>
        <p>{{artist  }}</p>
        <p>{{duration}}</p>
    </div>
</template>

<script lang="ts">
import axios from "axios";
export default{

    mounted(){
        this.getMusic();

    },
    data(){
        return{
            data:[] as any,
             url:"http://musica-api.uprailway.app/new" as string
        }
    },
    methods:{
        getMusic(){
            axios.get(this.url).then((_res)=>{
                this.data=_res.data
            })
        }
    }

}

</script>
<style>

</style>
