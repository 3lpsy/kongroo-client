<template lang="html">

    <div class="container">
        <div class="columns">
            <div class="column is-two-thirds-desktop">
                <article-preview-list>
                </article-preview-list>
            </div>
        </div>
    </div>

</template>

<script>
import loader from "../../../utils/loader";

export default {
    components: {
        ArticlePreviewList: loader.component("article", "article-preview-list"),
    }
}
</script>

<style lang="css">
</style>
