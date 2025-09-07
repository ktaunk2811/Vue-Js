import { createApp } from 'vue'
import 'primeicons/primeicons.css';
import './style.css'
import App from './components/App.vue'
// import ToastPlugin from 'vue-toast-notification';
// // Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
// import 'vue-toast-notification/dist/theme-bootstrap.css';
import router from './Router';
// import App2 from './components/App2.vue'

const app=createApp(App);
app.use(router)
// app.use(ToastPlugin)
app.mount('#app');

