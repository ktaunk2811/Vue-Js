<script setup>
import Hero from '/Users/KTA144/OneDrive - Maersk Group/Desktop/Learning Projects/my-vue-app/src/components/Hero.vue'
import HomeCards from '/Users/KTA144/OneDrive - Maersk Group/Desktop/Learning Projects/my-vue-app/src/components/HomeCards.vue'
import JobListigs from '/Users/KTA144/OneDrive - Maersk Group/Desktop/Learning Projects/my-vue-app/src/components/JobListing.vue'

</script>

<template>
    <!-- <Hero title="Test Title" subtitle="Test Subtitle"/> -->
    <Hero/>
    <HomeCards/>
    <JobListigs :limit="3" show-button="true"/>
</template>