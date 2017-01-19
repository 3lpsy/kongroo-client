<template>
    <div>
        <transition-group appear name="slide-fade" mode="out-in">
            <div v-if="articles && articles.length > 0" v-for="article in articles" :key="article.id">
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
            <mugen-scroll :handler="nextPage" :should-handle="shouldLoad" key="loading">
              loading...
            </mugen-scroll>
        </transition-group>
    </div>
</template>

<script>
import MugenScroll from 'vue-mugen-scroll'
import queryTagIds from "tag/mixins/queryTagIds";
import queryPaginator from "common/mixins/queryPaginator";

export default {
    mixins: [queryTagIds, queryPaginator],
    data() {
        return {
            booted: false,
            loading: true,
            reactToQueryPage: false
        };
    },

    computed: {
        articles() {
            if (! this.repo) {
                return [];
            }
            if (! this.repo.articles) {
                return []
            }
            return this.repo.articles;
        },
        pagination() {
            if (! this.paginations && this.paginations.length < 1) {
                return {}
            }
            return this.paginations[this.paginations.length - 1];
        },
        paginations() {
            if (! this.repo) {
                return [];
            }
            if (! this.repo.meta) {
                return []
            }
            if (! this.repo.meta.paginations) {
                return []
            }

            return this.repo.meta.paginations;
        },
        repo() {
            return this.$store.getters['article/getters/repo'];
        },
        shouldLoad() {
            return ! this.loading && this.booted;
        },

    },

    methods: {
        query() {
            return {
                page: this.queryPage,
                limit: this.queryLimit,
                total: this.queryTotal,
                tags: this.queryTagIds
            };
        },
        nextPage() {
            this.loading = true;
            console.log("loadNextPage")
            if (this.pagination.hasMore) {
                console.log("hasMore")
                let query = this.query();
                query.page = query.page + 1;
                this.$router.push({name: this.$router.name, query})
            }
        },
        loadArticlesFromQuery() {
            this.loading = true;
            let query = this.query();
            return this.$store.dispatch("article/actions/fetchArticles", {query});
        }
    },

    watch: {
        queryPage(val) {
            console.log('queryPage');
            if (this.reactToQueryPage) {
                console.log('can reactToQueryPage');
                this.loadArticlesFromQuery().then((response) => {
                    this.loading = false;
                });
            }
        },
        queryTagIds(val) {

        }
    },


    mounted() {
        this.loadArticlesFromQuery().then((response) => {
            this.loading = false;
            this.booted = true;
            this.reactToQueryPage = true;
        }).catch((error) => {
            throw error;
        })
    },


    components: {
        MugenScroll,
    }
};
</script>

<style type="text/css">

</style>
