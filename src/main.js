import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import a2 from './store'


createApp(App).use(a2).use(router).mount('#app')

console.log(a2);
