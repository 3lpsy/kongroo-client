<template>
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
</template>

<script>
import ImageContentShow from 'article/components/content-show/ContentShow';
import MarkdownContentShow from 'article/components/content-show/MarkdownContentShow';
import VideoContentShow from 'article/components/content-show/VideoContentShow';

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
        MarkdownContentShow,
        VideoContentShow,
        ImageContentShow
    }
}

</script>

<style>

</style>
