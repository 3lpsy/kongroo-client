<template>
    <div class="SectionShow">
        <content-show :data-content="section.content">
        </content-show>
    </div>

</template>

<script>

import ContentShow from 'article/components/content-show/ContentShow';


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
    components: {
        ContentShow
    }
}

</script>

<style>
.SectionShow {
    margin: 10px 0;
}
</style>
