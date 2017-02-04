<template>
    <div>
        <transition name="slide-fade" mode="out-in">
            <article class="container" v-if="article && article.id" key="show">
                <div class="content">
                    <vb-heading>
                        <article-title :data-article="article">
                        </article-title>
                    </vb-heading>
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
import ArticleAuthor from 'article/components/article-show/ArticleAuthor';
import ArticleTitle from 'article/components/article-show/ArticleTitle';
import ArticleMeta from 'article/components/article-show/ArticleMeta';
import ArticleSectionShow from 'article/components/section-show/SectionShow';
import Spinner from 'common/components/spinners/ClipSpinner';

export default {
    props: {

    },
    computed: {
        activeId () {
            return this.$store.getters['article/getters/activeId'];
        },
        article () {
            return this.$store.getters['article/getters/article'];
        }
    },

    mounted() {
        if (! this.article && this.activeId) {
            this.$store.dispatch('article/actions/fetchArticle', {articleId: this.activeId})
                .then((response) => {
                }
            )
        }
    },

    components: {
        ArticleTitle,
        ArticleMeta,
        ArticleAuthor,
        ArticleSectionShow,
        Spinner
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
