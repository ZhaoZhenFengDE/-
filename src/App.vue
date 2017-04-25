<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import './assets/css/main.css'
    export default {
        data(){
            return {
                cart: 0,
            }
        },
        created () {
            this.$store.dispatch('GET_ITEMS');
            this.$store.dispatch('GET_ARTICLES_DESC')
        }
    }
</script>

<style>

</style>
