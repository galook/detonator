import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Swal from 'sweetalert2'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import './index.css'


const app = createApp(App)
// Make BootstrapVue available throughout your project
app.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
app.use(IconsPlugin)
app.config.globalProperties.$alert = () => {
    return Swal
};

app.use(router).mount('#app')
