import 'primeicons/primeicons.css';
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeflex/primeflex.css"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import firebaseConfig from './firebase.config'
import { initializeApp } from "firebase/app";

import App from './App.vue'
import router from './router'

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')



// Initialize Firebase
