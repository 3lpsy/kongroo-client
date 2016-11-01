<template>
    <div>
        <transition-group appear name="slide-fade" mode="out-in">
            <article-preview
                v-for="article in articles"
                :data-article="article"
                key="show"
            >
            </article-preview>
            <infinite-loading
                :on-infinite="onInfinite"
                :v-is-loading="paginatedArticlesIsLoading"
                :v-is-complete="paginatedArticlesIsComplete"
                :v-is-first-loaded="paginatedArticlesIsFirstLoaded"
                :v-is-empty="paginatedArticlesIsEmpty"
                key="load">
            </infinite-loading>
        </transition-group>
    </div>
</template>

<script>
import loader from "../../../utils/loader";

export default {

    data() {
        return {
        };
    },

    computed: {
        articles () {
            return this.$store.getters.paginatedArticles;
        },
        paginatedArticlesIsLoading() {
            return this.$store.getters.paginatedArticlesIsLoading;
        },
        paginatedArticlesIsComplete() {
            return this.$store.getters.paginatedArticlesIsComplete;
        },
        paginatedArticlesIsFirstLoaded() {
            return this.$store.getters.paginatedArticlesIsFirstLoaded;
        },
        paginatedArticlesIsEmpty() {
            return this.$store.getters.paginatedArticlesIsEmpty;
        },
        canInfiniteLoad() {
            return !this.paginatedArticlesIsLoading && !this.paginatedArticlesIsComplete && this.paginatedArticlesIsFirstLoaded;
        },
        tags() {
            return this.$route.query["tags[]"] || [];
        },
        nextPage() {
            let currentPage = this.$route.query.page || 1;
            return currentPage + 1;
        }
    },

    methods: {
        getNextPaginatedArticles(...args) {
            this.$store.dispatch('getNextPaginatedArticles', ...args)
        },
        onInfinite(){
            if (this.canInfiniteLoad) {
                this.$router.push({query: { page: this.nextPage }});
            }
        }

    },

    beforeCreated(){

    },

    created() {

    },

    beforeMount(){

    },

    mounted() {

    },

    beforeDestroy() {

    },

    components: {
        ArticlePreview: loader.component("article", "article-preview"),
        InfiniteLoading: loader.ui("infinite-loading"),
    }
};
</script>

<style type="text/css">

</style>
