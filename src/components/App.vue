<script setup>
import Navbar from './Navbar.vue';
import Hero from './Hero.vue';
import HomeCards from './HomeCards.vue';
import JobListigs from './JobListigs.vue';

</script>

<template>
    <Navbar/> 
    <!-- <Hero title="Test Title" subtitle="Test Subtitle"/> -->
     <Hero/>
    <HomeCards/>
    <JobListigs :limit="3" show-button="true"/>
</template>