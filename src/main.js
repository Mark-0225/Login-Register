import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createVuetify } from 'vuetify'
import 'vuetify/dist/vuetify.css'
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

const vuetify = createVuetify() // 建立 Vuetify 實例

app.use(vuetify) // 將 Vuetify 實例安裝為 Vue 的插件
app.use(router)

app.mount('#app')
