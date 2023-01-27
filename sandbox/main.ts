import { createApp } from 'vue'
import App from './App.vue'

import '../src/fontawesome/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const app = createApp(App)

app.component('f-icon', FontAwesomeIcon)
app.mount('#app')