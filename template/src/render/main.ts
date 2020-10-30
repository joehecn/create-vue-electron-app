
import { createApp } from 'vue'
import App from './App.vue'
import worker from './worker/index'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/lib/theme-chalk/index.css'
import './index.scss'

const app = createApp(App as any)

app.config.globalProperties.$$worker = worker

app
  .use(ElementPlus)
  .use(router)

window.vm = app.mount('#app')
