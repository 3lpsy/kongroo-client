<template>
        <markdown-show
            :data-markdown="content.markdown"
        >

        </markdown-show>
</template>

<script>
import MarkdownShow from 'common/components/markdown/markdown-show/MarkdownShow';

export default {
    props: {
        dataContent: {
            required: true
        }
    },
    computed: {
        content () {
            return this.dataContent
        }
    },

    beforeCreated () {

    },

    created () {

    },

    beforeMount () {

    },

    mounted () {
    },

    beforeDestroy () {

    },

    components: {
        MarkdownShow
    }
}

</script>

<style>

</style>
