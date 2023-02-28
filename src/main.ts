// Required imports
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Routes
import router from '@/router'

// Parent component
import App from './App.vue'

const app = createApp(App)   // Create the app
const pinia = createPinia()  // Create the store

app.use(pinia)               // Use pinia store
app.use(router)              // Use vue router

app.mount('#app')            // Mount the app