import './assets/main.css'

import { createApp } from 'vue';


import App from './App.vue';
import router from './router';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
const app = createApp(App)

app.use(router)
app.use(bootstrap)

app.mount('#app')
