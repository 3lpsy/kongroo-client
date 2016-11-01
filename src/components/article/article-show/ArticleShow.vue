<template>
    <div>
        <transition name="slide-fade" mode="out-in">
            <article class="container" v-if="article.id" key="show">
                <div class="content">
                    <article-meta :data-article="article">
                    </article-meta>
                    <article-title :data-article="article">
                    </article-title>
                    <article-section-show
                        v-for="section in article.sections"
                        :data-section="section"
                    >
                    </article-section-show>
                </div>
            </article>
            <div class="container Spinner" v-else key="loading">
                <spinner color="#fd6769">
                </spinner>
            </div>
        </transition>
    </div>
</template>

<script>
    import loader from "../../../utils/loader";
    export default {
        props: {

        },
        computed: {
            article () {
                return this.$store.getters.article;
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
            ArticleTitle: loader.component("article", "article-show", "article-title"),
            ArticleMeta: loader.component("article", "article-show", "article-meta"),
            ArticleSectionShow: loader.component("section", "section-show"),
            Spinner: loader.spinner("clip")

        }
    }

</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}

</style>
