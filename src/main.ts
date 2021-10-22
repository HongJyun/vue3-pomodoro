import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './style.css'
import imgFallback from '@/directives/img-fallback'

const app = createApp(App)
app.directive('img-fallback', imgFallback)
app.use(store).use(router).mount('#app')
