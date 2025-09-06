<!-- options api -->
<script> 
export default{
    data(){
        return{
            name: 'Khush Taunk',
            status:'boss',
            tasks:['task1','task2','task3'],
            link: "https://google.com"
        }
    },
    methods:{
        toggleStatus(){
            if(this.name=='Khush Taunk'){
                this.name='Taunk Khush'
            }
            else{
                this.name='Khush Taunk'
            }

        }
    }
}
</script>

<template>
    <h1>Vue Jobs</h1>
    <p>{{ name }}</p>
    <p v-if="status=='active'">good</p>
    <p v-else-if="status=='boss'">boss</p>
    <p v-else>bad</p>

    <ul v-for="task in tasks">
        <li>{{ task }}</li>
    </ul>

    <a v-bind:href='link'>Google</a>
    <button v-on:click="toggleStatus">Click me to change my name to Taunk Khush</button>
    
</template>

<!-- 
script
style -->

<style scoped>
h1 {
    color: rgb(50, 149, 80);
}
</style>


