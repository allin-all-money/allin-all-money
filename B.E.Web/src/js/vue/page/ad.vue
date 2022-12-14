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
    display: flex;
    position: relative;
    z-index: 999;
    float: right;
    margin: 10px;
    cursor: pointer;
    svg:nth-child(2) {
        display: none;
    }
}

.cross:hover {
    cursor: pointer;

    svg:nth-child(1) {
        display: none;
    }
    svg:nth-child(2) {
        display: inherit;
    }
}

#play {
    z-index: 300;
    font-size: 50px;
    position: absolute;
    cursor: pointer;
}
</style>

<template>
    <div class=cross @click="play">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle"
            viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-circle-fill"
            viewBox="0 0 16 16">
            <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
        </svg>
    </div>
    <div id="play" @click="this.play"></div>
    <div class="bg">
        <video loop>
            <source src="/ad.mp4" type="video/mp4">
        </video>
    </div>
</template>
