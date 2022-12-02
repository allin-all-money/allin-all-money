import { createApp } from 'vue';
import { createPinia} from 'pinia';
import lazyLoad from 'vue-lazyload';
import app from './vue/index.vue';
import errorimage from './vue/componenet/img/error.png'
import loadimage from './vue/componenet/img/error.png'
const pinia = createPinia()
createApp(app)
.use(lazyLoad,{
    preLoad:1.3,
    error: errorimage,
    loading: loadimage,
    attempt: 1
})
.use(pinia)
.mount("#app");
