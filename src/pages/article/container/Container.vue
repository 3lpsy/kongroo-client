<template>
    <div>
        <app-container :footer="true">
            <slot></slot>
        </app-container>
    </div>


</template>

<script>

import AppContainer from 'common/components/container/Container.vue';

export default {
    methods: {
        fetchTags() {
            let query = {
                sortBy: 'articleCount',
                sortDir: 'DESC'
            }
            this.$store.dispatch("tag/actions/fetchTags", {query}).then((tags) => {
                console.log('Fetched');
            }).catch((error) => {
                throw error;
            });
        },
    },

    mounted() {
        this.fetchTags();
    },
    components: {
        AppContainer
    }
};
</script>

<style type="text/css">

</style>
