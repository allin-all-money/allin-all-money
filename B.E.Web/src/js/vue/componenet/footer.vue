<script>
import localMark from './mark.vue';
export default {
    data() {
        return {
            count: 0
        }
    },
    components: {
        localMark,
    }
}
</script>
<style lang="scss" scoped>
.footer {
    text-align: center;
    padding: 15px;
    background-color: rgb(238, 238, 238);

}
</style>
<template>
    <div class="footer">
        <div class="container row">
            <localMark class="col-4" location="Taiwan"></localMark>
            <div class="col-6">
                Copyright ©2022. Shark-Small Inc. All Rights Reversed.
            </div>
        </div>
    </div>


</template>