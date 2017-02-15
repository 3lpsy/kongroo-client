<template>
    <div>
        <app-container>
            <slot></slot>
        </app-container>
    </div>


</template>

<script>

import AppContainer from 'common/components/container/Container.vue';
import tokens from 'auth/mixins/tokens';

export default {
    mixins: [tokens],
    mounted() {
    },
    components: {
        AppContainer
    }
};
</script>

<style type="text/css">

</style>
