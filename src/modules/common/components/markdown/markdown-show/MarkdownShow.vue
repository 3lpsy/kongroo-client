<template>
    <div>
        <vue-markdown :data-text="markdown.body">
        </vue-markdown >
    </div>
</template>

<script>
    import VueMarkdown from "./VueMarkdown.vue";

    export default {
        props: {
            dataMarkdown: {
                required: true
            }
        },

        computed: {
            markdown () {
                return this.dataMarkdown
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
            VueMarkdown
        }
    }

</script>

<style>

</style>
