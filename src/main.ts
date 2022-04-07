import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import '@/utils/lib/global.js'
import 'animate.css'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router).use(ElementPlus).use(createPinia()).mount('#app')
