<template>
    <div class="bg" v-if="!isClick">
        <div class="window" v-if="!isClick" >
            <closeVue @click="isClick = true"></closeVue>
            <h1>Congratulation</h1>
            <div class="content">
                    You are the 999th user, we decide to give you 999% off discount.<br/>
                    Please chooes one shoes and type the coupon "Nike999".<br/>
                    Then you can get our discount.
                    <div class="end">Nike 999 happy every night.</div>
                </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.content{
    user-select: none;
    padding: 2em;
    color: aliceblue;
    font-size: 1.4em;
    .end{
        margin-top: 2em;
        text-align: end;
    }
}
h1 {
    color: rgb(0, 136, 255);
    user-select: none;
}
.bg {
    position: absolute;
    display: flex;
    background-color: rgba(255, 255, 255, 0.247);
    height: 100vh;
    width: 98vw;
    z-index: 50;
}

.window {
    position: relative;
    z-index: 99;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.685);
    border-radius: 30px;
    width: 48em;
    height: 27em;
    padding: 30px;

    .cross-icon {
        float: right;
    }
}
</style>
<script>
import closeVue from './close.vue';
export default {
    data() {
        return {
            isClick: false
        }
    },
    components: {
        closeVue
    },
};
</script>