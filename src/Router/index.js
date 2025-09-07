import { createRouter,createWebHistory } from "vue-router";
import Homeview from "../views/Homeview.vue";
import JobsView from "../views/JobsView.vue";
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
        path: '/',
        name: 'home',
        component :Homeview
        },
        {
        path: '/jobs',
        name: 'jobs',
        component :JobsView
        }
    ]
})

export default router;