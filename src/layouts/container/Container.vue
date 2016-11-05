<template>
    <div class="App--base">
        <app-navbar></app-navbar>
        <slot></slot>
        <app-footer></app-footer>
    </div>


</template>

<script>
    import loader from "../../utils/loader";

    export default {
        mounted () {
            console.log(this.$store);
        },
        components: {
            AppNavbar: loader.layout('navbar'),
            AppFooter: loader.layout('footer')
        }
    };
</script>

<style type="text/css">

</style>
