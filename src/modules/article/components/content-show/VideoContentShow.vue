<template>
    <video-show :data-video="content.video">
    </video-show>
</template>

<script>
import VideoShow from 'common/components/video/video-show/VideoShow';

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
    components: {
        VideoShow
    }
}

</script>

<style>

</style>
