<script>
import * as bootstrap from 'bootstrap'

export default {
    data() {
        return {
            isMenuClick: false,
            distance: 0,
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll(event) {
            this.distance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-menu:hover {
    cursor: pointer;
}

.nav-menu {
    display: block;
    margin-top: auto;
    width: max-content;
    margin-right: 20px;
    padding: 3px;
}

.nav-menu span {
    display: flex;
    width: 30px;
    height: 2px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: rgb(80, 80, 80);
}

.nav-menu span:nth-child(1) {
    margin-left: 15px;
    width: 15px;
    transition: margin 0.5s, width 0.5s, transform 0.5s;
}

.nav-menu span:nth-child(2) {
    width: 15px;
    transition: margin 0.5s, width 0.5s, transform 0.5s;
}

.nav-menu:hover span:nth-child(1) {
    width: 30px;
    transition: margin 0.5s, width 0.5s, transform 0.5s;
}

.nav-menu:hover span:nth-child(2) {
    transform: translateX(15px);
    width: 30px;
    transition: margin 0.5s, width 0.5s, transform 0.5s;
}

.nav-menu.active span {
    margin: 0px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-right: -7px;
    width: 30px;
}

.nav-menu.active span:nth-child(1) {
    transform: rotateZ(45deg) translateY(12px);
    transition: background-color 0.5s ease, margin 0.5s, width 0.5s, transform 0.5s;
}

.nav-menu.active span:nth-child(2) {
    transform: rotateZ(-45deg) translateY(-12px);
    transition: background-color 0.5s ease, margin 0.5s, width 0.5s, transform 0.5s;
}

.nav-menu.active:hover span {
    background-color: rgb(179, 179, 179);
    transition: background-color 0.5s ease, margin 0.5s, width 0.5s, transform 0.5s;
}

.navbar-toggler,
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    border: none;
    outline: none;
    box-shadow: none;
}
.img{
    height:53px;
    min-width:fit-content;
    object-fit: cover;
}
 

</style>

<template>


    <nav class="navbar navbar-expand-xs bg-light" :class="{ 'fixed-top' : distance > 10 }">
        <div class="container">
            <a class="navbar-brand" href="/">
                <img src="./img/ss.svg" class="img"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <div class="nav-menu" :class="{ active: isMenuClick }" @click="isMenuClick = !isMenuClick">
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item me-lg-9">
                        <a class="nav-link fw-light" href="#">常見問題</a>
                    </li>
                    <li class="nav-item me-lg-9">
                        <a class="nav-link fw-light" href="#">註冊</a>
                    </li>
                    <li class="nav-item me-lg-9">
                        <a class="nav-link fw-light" href="#">登入</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>


</template>