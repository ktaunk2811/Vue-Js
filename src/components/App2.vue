<!-- compositions api -->
<script setup>
import { ref } from 'vue';
        const name=ref ("Khush Taunk");
        const status=ref('active');
        const tasks= ref( ['task1','task2','task3']);
        const newTask=ref('');

        const toogleStatus=()=>{
            if(name.value=='Khush Taunk'){
                name.value='Taunk Khush'
            }
            else{
                name.value='Khush Taunk'
            }
        };

        const addTask=()=>{
            if(newTask.value.trim()!==''){
                tasks.value.push(newTask.value);
                newTask.value=''
            }
        }

        const removeTask=(task)=>{
            tasks.value.pop(task.value);
            //can also use splice
        }


</script>

<template>
    <h1>Vue Jobs</h1>
    <p>{{ name }}</p>
    <p v-if="status=='active'">good</p>
    <p v-else-if="status=='boss'">boss</p>
    <p v-else>bad</p>

    <form @submit.prevent="addTask()">
        <label for="newTask">Add Task</label>
        <input type="text" name="newTask" id="newTask" v-model="newTask"/>
        <button type="submit">Submit</button>
    </form>



    <ul >
        <li v-for="task in tasks" :key="task">
            <span>
                {{task}}
            </span>
            <button @click="removeTask(task)">Delete X</button>
            
        
        </li>
    </ul>

    <a v-bind:href='link'>Google</a>
    <button v-on:click=toogleStatus>Click me to change my name to Taunk Khush</button>
    
</template>

<!-- 
script
style -->

<style scoped>
h1 {
    color: rgb(50, 149, 80);
}
</style>


