<template>
    <div>
        Page Not found 
    </div>
    <button @click="Redirect">Redirect</button>
    <button @click="Back">Back</button>
    <button @click="Next">Next</button>
    
</template>

<script lang="ts">
export default{
    methods:{
        Redirect(){
            this.$router.push("/jobs")
        },
        Back(){
            this.$router.go(-1);
        },
        Next(){
            this.$router.go(1);

        }
    }
}

</script>