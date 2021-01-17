import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Swal from 'sweetalert2'

import './index.css'


const app = createApp(App)

app.config.globalProperties.$alert = () => {
    return Swal
};

app.use(router).mount('#app')
