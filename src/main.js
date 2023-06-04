import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
// eslint-disable-next-line vue/multi-word-component-names
import Login from './components/UserLogin.vue'
// eslint-disable-next-line vue/multi-word-component-names
import Register from './components/UserRegister.vue'


const routes = [
  { path: '/login', component: Login },
  { path: '/register', component: Register }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)

app.mount('#app')
