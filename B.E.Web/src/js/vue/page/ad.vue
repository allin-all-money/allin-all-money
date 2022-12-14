<script>
export default {
    data() {
        return {
            image: []
        }
    },
    created() {
        setTimeout(()=>{
            let v =document.querySelector("video");
            v.play()
        },500);
    }
}
</script>

<style lang="scss" scoped>
.bg{
    top:0;
    position: absolute;
    height: 100vh;
    background-color: aqua;
    height: 100%;
    width: 100%;
    z-index: 150;
}
video{
    position: absolute;
    align-self: center;
    height: 100vh;
    z-index: 200;
    top:0;
    
}
.cross{
    position: absolute;
}
</style>

<template>
    <div class=cross>X</div>
    <div class="bg">
        <video src="/ad.mp4"></video>
    </div>
</template>
