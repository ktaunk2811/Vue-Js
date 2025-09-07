<script setup>
import JobListigs from '../components/JobListigs.vue';
import Hero from '/Users/KTA144/OneDrive - Maersk Group/Desktop/Learning Projects/my-vue-app/src/components/Hero.vue'
import HomeCards from '/Users/KTA144/OneDrive - Maersk Group/Desktop/Learning Projects/my-vue-app/src/components/HomeCards.vue'


</script>

<template>
    <!-- <Hero title="Test Title" subtitle="Test Subtitle"/> -->
    <Hero/>
    <HomeCards/>
    <JobListigs :limit="3" show-button="false"/>
</template>