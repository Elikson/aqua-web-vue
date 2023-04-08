import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
//core
import "primevue/resources/primevue.min.css";
//icons
import "primeicons/primeicons.css";

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Card from 'primevue/card'
import DataView from 'primevue/dataview'
import Rating from 'primevue/rating'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import VueApexCharts from 'vue3-apexcharts'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(PrimeVue);
app.use(router)

app.component('apexchart', VueApexCharts);
app.component('Button', Button);
app.component('InputText', InputText);
app.component('Checkbox', Checkbox);
app.component('Card', Card);
app.component('DataView', DataView);
app.component('Rating', Rating);
app.component('DataTable', DataTable);
app.component('Column', Column);

app.mount('#app')
