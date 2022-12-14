import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { RouterView, createRouter, createWebHistory,createMemoryHistory,createWebHashHistory  } from 'vue-router'
import lazyLoad from 'vue-lazyload';
import app from './vue/index.vue';
import errorimage from './vue/componenet/img/error.png'
import loadimage from './vue/componenet/img/error.png'
import indexPage from './vue/page/index.page.vue'
import ad from './vue/page/ad.vue' 
const routes = [
    {
        path: '/',
        component: indexPage
    },
    {
        path: '/ad',
        component: ad
    },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
const pinia = createPinia()
createApp(app)
    .use(router)
    .use(lazyLoad, {
        preLoad: 1.3,
        error: errorimage,
        loading: loadimage,
        attempt: 1
    })
    .use(pinia)
    .mount("#app");
