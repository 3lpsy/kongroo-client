<template>
    <div>
        <transition-group appear name="slide-fade" mode="out-in">

            <article-preview
                v-if="articles && articles.length > 0"
                v-for="article in articles"
                :data-article="article"
                :key="'article-preview-' + article.id">
            >
            </article-preview>
            <mugen-scroll :handler="nextPage" :should-handle="shouldLoad" key="loading">
              <span v-if="hasMore">
                  loading...
              </span>
              <span v-else>
                  No More
              </span>
            </mugen-scroll>
        </transition-group>
    </div>
</template>

<script>
import MugenScroll from 'vue-mugen-scroll'
import queryTagIds from "tag/mixins/queryTagIds";
import paginate from "common/mixins/paginate";
import ArticlePreview from 'article/components/article-preview/ArticlePreview';
export default {

    mixins: [queryTagIds, paginate],

    data() {
        return {
            booted: false,
            loading: true,
            reactToQueryPage: false,
            reactToQueryTagIds: true
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
        hasMore() {
            if (! this.pagination) {
                return true;
            }
            return this.pagination.hasMore;
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
        }

    },

    methods: {
        query() {
            return {
                page: this.page,
                limit: this.limit,
                total: this.total,
                tags: this.queryTagIds
            };
        },
        nextPage() {
            this.loading = true;
            console.log("loadNextPage")
            if (this.pagination.hasMore) {
                console.log("hasMore")
                this.dataPage = this.page + 1;
                let query = this.query();
                this.loadArticlesFromQuery(query).then((response) => {
                    this.loading = false;
                })
            }
        },
        loadArticlesFromQuery(customQuery) {
            this.loading = true;
            let query = this.query();
            query = Object.assign(query, customQuery);
            return this.$store.dispatch("article/actions/fetchArticles", {query});
        },
        clearArticles() {
            this.loading = true;
            this.dataPage = 1;
            this.dataLimit = 1;
            this.total = 0;
            return this.$store.dispatch("article/actions/clearArticles").then((response) => {
                this.loading = false
            });

        }
    },

    watch: {
        queryTagIds(val) {
            console.log('queryTagIds');
            if (this.reactToQueryPage) {
                console.log('can reactToQueryTagIds');
                this.clearArticles();
                this.loadArticlesFromQuery().then((response) => {
                    this.loading = false;
                });
            }
        }
    },


    mounted() {
        this.clearArticles();
        this.loadArticlesFromQuery().then((response) => {
            this.loading = false;
            this.booted = true;
            this.reactToQueryPage = true;
            this.reactToQueryTagIds = true;
        }).catch((error) => {
            throw error;
        })
    },


    components: {
        MugenScroll,
        ArticlePreview
    }
};
</script>

<style type="text/css">

</style>
