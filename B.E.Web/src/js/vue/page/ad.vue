<script>
export default {
    data() {
        return {
            image: []
        }
    },
    created() {
        document.addEventListener("DOMContentLoaded", () => {
            console.log("Loaded")
            let v = document.querySelector("video");
            v.play();
            document.addEventListener("mouseover", () => {
                console.log("mouse Over")
                v.play();
            })
            setTimeout(() => {
            }, 100)
        })

    },
    methods: {
        play() {
            console.log("Play")
            let v = document.querySelector("video");
            v.play();
        }
    }
}
</script>

<style lang="scss" scoped>
.bg {
    top: 0;
    position: absolute;
    height: 100vh;
    background-color: aqua;
    height: 100%;
    width: 100%;
    z-index: 150;
}

video {
    display: flex;
    align-self: center;
    margin: 0 auto;
    height: 100vh;
    z-index: 200;
    top: 0;

}

.cross {
    position: absolut;
    z-index: 999;
}

#play {
    z-index: 300;
    font-size: 50px;
    position: absolute;
    cursor: pointer;
}
</style>

<template>
    <div class=cross>X</div>
    <div id="play" @click="this.play"></div>
    <div class="bg">
        <video loop>
            <source src="/ad.mp4" type="video/mp4">
        </video>
    </div>
</template>
