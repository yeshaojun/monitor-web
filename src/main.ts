import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import './assets/main.css'
import './index.css'
import './theme.scss'
const app = createApp(App)

app.use(router)

app.mount('#app')
