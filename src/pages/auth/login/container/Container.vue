<template>
    <div>
        <page-container>
            <slot></slot>
        </page-container>
    </div>


</template>

<script>

import PageContainer from 'common/components/container/Container.vue';

export default {
    mounted() {
    },
    components: {
        PageContainer
    }
};
</script>

<style type="text/css">

</style>
