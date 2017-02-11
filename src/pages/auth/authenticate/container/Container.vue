<template>
    <div>
        <app-container>
            <slot></slot>
        </app-container>
    </div>


</template>

<script>

import AppContainer from 'common/components/container/Container.vue';

export default {
    mounted() {
    },
    components: {
        AppContainer
    }
};
</script>

<style type="text/css">

</style>
