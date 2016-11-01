<template>
    <div>
        <content-show :data-content="section.content">
        </content-show>
    </div>
</template>

<script>
import loader from "../../../utils/loader";

export default {
    props: {
        dataSection: {
            required: true
        }
    },
    computed: {
        section () {
            return this.dataSection
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
        ContentShow: loader.component("section", 'content-show')
    }
}

</script>

<style>

</style>
