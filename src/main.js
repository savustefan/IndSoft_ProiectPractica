import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Masini from "@/components/Masini.vue";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css'; // Stilurile temei (saga-blue)
import 'primevue/resources/primevue.min.css'; // Stilurile componentelor PrimeVue
import 'primeicons/primeicons.css'; // Stilurile PrimeIcons
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import Titlu from "@/components/Titlu.vue";


const app = createApp(App)
app.component('masini', Masini)
app.component('titlu', Titlu )
app.component(DataTable)
app.mount('#app')

app.use(PrimeVue);

