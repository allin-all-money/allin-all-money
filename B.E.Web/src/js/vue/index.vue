<template>
    <RouterView></RouterView>
</template>
  
<script>
import { RouterView } from 'vue-router';
import indexPage from './page/index.page.vue'
import ad from './page/ad.vue'
export default {

    components: {
        indexPage,
        ad
    },
    created() {
        
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            let distance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            if (distance > 6000) {
                console.log("Hi");
                location.href='/ad';
            }
        }
    }

};
</script>