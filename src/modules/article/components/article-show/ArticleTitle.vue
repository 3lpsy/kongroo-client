<template>
    <div>
        <vb-title>
            {{article.title}}
        </vb-title>
        <vb-sub-title>
            {{article.publishedAt.diffForHumans}} in
                <router-link
                    v-if="tag.id"
                    v-for="tag in article.tags"
                    :to="{name: 'article.index', query: { 'tags[]': tag.id}}"
                    class="ArticlePreview__tag-link Link">
                        {{tag.name}}
                </router-link>
        </vb-sub-title>
    </div>
</template>

<script>
    export default {

        props: {
            dataArticle: {
                required: true
            }
        },

        computed: {
            article() {
                return this.dataArticle
            }
        }
    }

</script>

<style>

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>
