<template>
    <div class="App--base">
        <slot></slot>
        <app-footer v-if="footer"></app-footer>
    </div>


</template>

<script>

import AppFooter from 'common/components/footer/Footer'

export default {
    props: {
        footer: {
            default: false
        }
    },
    components: {
        AppFooter
    }
};
</script>

<style type="text/css">

</style>
