<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.icon {
    display: flex;
    margin: auto;
    position: fixed;
    right: 20px;
    bottom: 50px;
    border: 1px solid rgb(141, 141, 141);
    background-color: aqua;
    border-radius: 50%;
    height: 55px;
    width: 55px;
    color: rgb(97, 97, 97);
}
.icon:hover{
    background-color: aliceblue;
}
svg{
    margin: auto;
}

</style>

<template>
    <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart"
            viewBox="0 0 16 16">
            <path
                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
    </div>
</template>
