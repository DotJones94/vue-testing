import { createApp } from 'vue'
import App from './App.vue'
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'  //icons
import PrimeVue from 'primevue/config';
import Checkbox from "primevue/checkbox";



const app = createApp(App);

app.use(PrimeVue);

app.component('CheckBox', Checkbox);

app.mount('#app');