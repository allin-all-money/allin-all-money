<template>
    <navbar></navbar>
    <bodyContent></bodyContent>
    <customFooter></customFooter>
</template>
  
<script>
import navbar from '../componenet/nav.vue';
import customFooter from '../componenet/footer.vue';
import bodyContent from '../componenet/bodyContent.vue';
export default {
    data() {
        return {
            isMenuClick: false,
        }
    },
    components: {
        navbar,
        customFooter,
        bodyContent,
    },
};
</script>