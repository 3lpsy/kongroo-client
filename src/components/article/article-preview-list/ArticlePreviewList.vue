<template>
    <div>
        <transition-group appear name="slide-fade" mode="out-in">
            <div v-if="articleRepoArticles.length > 0" v-for="article in articleRepoArticles" :key="article.id">
                <p>
                    {{article.id}}: {{article.title}}

                </p>
            </div>
            <!-- <article-preview
                v-for="article in articleRepoArticles"
                :data-article="article"
                key="show"
            > -->
            <!-- </article-preview> -->
            <mugen-scroll :handler="onInfinite" :should-handle="!loading && isMorePagesExist" key="loading">
              loading...
            </mugen-scroll>
        </transition-group>
    </div>
</template>

<script>
import loader from "../../../utils/loader";
import MugenScroll from 'vue-mugen-scroll'

export default {

    data() {
        return {
            loading: false,
            routeTags: [],
            routePage: 1,
            routeLimit: 15
        };
    },

    computed: {
        articleRepoArticles() {
            if (this.articleRepo) {
                return this.articleRepo.data;
            }
            return []
        },
        isMorePagesExist() {
            if (this.paginatedMeta && this.paginatedMeta.pagination){
                return !! this.paginatedMeta.pagination.hasMore;
            }
            return false;
        },
        articleRepo() {
            return this.$store.getters['article/getters/articleRepository'];
        },
        paginatedArticles() {
            return this.$store.getters['article/getters/paginatedArticles'];
        },
        paginatedMeta() {
            return this.$store.getters['article/getters/paginatedMeta'];
        },
    },

    methods: {
        onInfinite() {
            console.log('on-infinite');
            this.queryPaginatedArticles();
            // increment page
            // check history of repo for query
            // if the query is not in the repo
            // run query, add to repo
        },
        updateRouteTagFilters() {
            let routeTags = this.$route.query["tags[]"];
            let tagsType = typeof routeTags;
            let tags = tagsType !== 'array' ? routeTags : [routeTags];
            this.routeTags = tags;
        },
        updateRoutePage() {
            let routePage = this.$route.query.page;
            this.routePage = routePage || 1;
        },
        updateRouteLimit() {
            let routeLimit = this.$route.query.limit;
            this.routeLimit = routeLimit || 5;
        },
        queryPaginatedArticles() {
            let meta = {
                limit: this.routeLimit,
                page: this.routePage
            }
            let filters = {
                tags: this.routeTags
            }
            this.loading = true;
            this.$store.dispatch('article/actions/queryPaginated', meta, filters).then(() => {
                console.log("article/actions/queryPaginated complete")
                this.loading = false;
            }).catch( (error) => {
                this.loading = false;
                console.log(error);
            });
        },
    },

    watch: {
        '$route': function() {
            this.updateRouteTagFilters();
            this.updateRoutePage();
            this.updateRouteLimt();
            this.queryPaginatedArticles();
        }
    },


    beforeCreated(){

    },

    created() {

    },

    beforeMount(){

    },

    mounted() {
        this.updateRouteTagFilters();
        this.updateRoutePage();
        this.updateRouteLimit();
        this.queryPaginatedArticles();
    },

    beforeDestroy() {

    },

    components: {
        ArticlePreview: loader.component("article", "article-preview"),
        MugenScroll,
    }
};
</script>

<style type="text/css">

</style>
