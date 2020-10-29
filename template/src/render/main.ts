import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.scss'

createApp(App as any)
  .use(ElementPlus)
  .use(router)
  .mount('#app')
