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
        PageContainer
    }
};
</script>

<style type="text/css">

</style>
