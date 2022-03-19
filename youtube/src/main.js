import {createApp} from 'vue'
import App from './App.vue'
import './index.css'

import {
    createRouter,
    createWebHistory
} from 'vue-router'

import Home from './home/Home.vue'
import Video from './video/Video.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/video', component: Video },
]

const router = createRouter({
    history: createWebHistory(),
    routes, 
})

createApp(App).use(router).mount('#app')
