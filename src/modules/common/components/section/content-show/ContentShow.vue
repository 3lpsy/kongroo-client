<template>
    <div>
        <div v-if="content">

            <markdown-content-show
                v-if="content.type === 'markdown'"
                :data-content="content">
            </markdown-content-show>

            <video-content-show
                v-if="content.type === 'video'"
                :data-content="content">
            </video-content-show>

            <image-content-show
                v-if="content.type === 'image'"
                :data-content="content">
            </image-content-show>

        </div>
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
        MarkdownContentShow: loader.component("section", 'content-show', 'markdown-content-show'),
        VideoContentShow: loader.component("section", 'content-show', 'video-content-show'),
        ImageContentShow: loader.component("section", 'content-show', 'image-content-show')
    }
}

</script>

<style>

</style>
