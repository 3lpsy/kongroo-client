<template>
    <div>
        <markdown-show
            :data-markdown="content.markdown"
        >

        </markdown-show>
    </div>
</template>

<script>
import loader from "../../../utils/loader";

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
        MarkdownShow: loader.component("markdown", "markdown-show")
    }
}

</script>

<style>

</style>
