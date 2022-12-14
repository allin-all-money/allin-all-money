<template>
    
    <JumpWindowVue></JumpWindowVue>
    <navbar></navbar>
    <bodyContent></bodyContent>
    <customFooter></customFooter>
</template>
<script>
import JumpWindowVue from '../componenet/JumpWindow.vue';
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
        JumpWindowVue,
        navbar,
        customFooter,
        bodyContent,
    },
};
</script>