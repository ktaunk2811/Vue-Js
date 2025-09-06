import { createApp } from 'vue'
import 'primeicons/primeicons.css';
import './style.css'
import App from './components/App.vue'
import router from './Router';
// import App2 from './components/App2.vue'

const app=createApp(App);
app.use(router)
app.mount('#app');

