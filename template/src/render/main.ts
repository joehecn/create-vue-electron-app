
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.scss'

createApp(App as any)
  .use(router)
  .mount('#app')
