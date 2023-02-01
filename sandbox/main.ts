import { createApp } from 'vue'
import App from './App.vue'

import kyui3 from '../src/index';
const app = createApp(App)

app.use(kyui3)
app.mount('#app')