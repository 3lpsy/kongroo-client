<template>
    <div>
        <app-view>
            <section class="hero is-primary">
                <!-- <div class="hero-body">
                    <div class="container has-text-centered">
                      <h1 class="title">
                        Articles
                      </h1>
                      <h2 class="subtitle">
                        {{csv(capitalizeArray(queryTags))}}
                      </h2>
                    </div>
                </div>
                <div class="hero-foot">
                    <div class="container has-text-centered">
                        <nav class="tabs is-boxed is-fullwidth">
                            <ul>
                                <li class="" v-for="tag in tagTags">
                                    <app-link
                                        v-if="tag.id"
                                        class="ArticlePreview__tag-link Link"
                                        r-route="article.index"
                                        :r-params="{}"
                                        :r-query="{'tags[]': [tag.id]}"
                                        :query-only="true">
                                        <span slot="link">
                                            {{capitalizeWords(tag.name)}}
                                        </span>
                                    </app-link>
                                </li>
                            </ul>
                          </nav>
                    </div>
                </div> -->
            </section>
            <br><br>
            <div class="container">
                <!-- <div class="columns">
                    <div class=" column is-two-thirds-desktop">
                        <article-preview-list>
                        </article-preview-list>
                    </div>
                </div> -->
            </div>
        </app-view>
    </div>
</template>

<script>
import loader from "../../../utils/loader";

export default {
    data() {
        return {
            articlesTagFilters: [],
            articlesSeriesFilters: [],
            articlesAuthorFilters: [],
            articlesPage: 1,
            articlesLimit: 1
        };
    },

    computed: {
        // tagTags() {
        //     return this.tags.slice(0, 5);
        // },
        // queryTags() {
        //     let tags = this.$route.query["tags[]"] || [];
        //     if (! Array.isArray(tags)) {
        //         return [tags];
        //     }
        //     return tags;
        // },
        // queryPage() {
        //     return this.$route.query.page || 1
        // },
        // tags() {
        //     return this.$store.getters.paginatedTags;
        // }
    },

    methods: {
        updateRouteTagFilters() {
            this.articlesTagFilters = [];
            let routeTags = this.$route.query["tags[]"];
            let tagsType = typeof routeTags;
            let tags = tagsType !== 'array' ? routeTags : [routeTags];
            this.tagFilters = tags;
        },
        updateRoutePage() {
            let routePage = this.$route.query.page;
            this.articlesPage = routePage || 1;
        },
        updateRouteLimit() {
            let routeLimit = this.$route.query.limit;
            this.articlesLimi = routeLimit || 5;
        },
        queryPaginatedArticles() {
            let meta = {
                limit: this.articlesLimit,
                page: this.articlesPage
            }
            let filters = {
                tags: this.articlesTagFilters
            }
            this.$store.dispatch('article/actions/queryPaginated', meta, filters);
        }
        // getPaginatedArticles(...args) {
        //     this.$store.dispatch('getPaginatedArticles', ...args)
        // },
        // getPaginatedTags(...args) {
        //     this.$store.dispatch('getPaginatedTags', ...args)
        // },
        // capitalizeWord(word) {
        //     return word[0].toUpperCase() + word.substr(1);
        // },
        // capitalizeWords(str) {
        //     return str
        //         .toLowerCase()
        //         .split(' ')
        //         .map(function(word) {
        //             return word[0].toUpperCase() + word.substr(1);
        //         })
        //         .join(' ');
        // },
        // capitalizeArray(wordArray) {
        //     return wordArray.map(word => {
        //         return this.capitalizeWords(word)
        //     });
        // },
        // csv(array) {
        //     return array.join(",").trim(',');
        // }


    },

    watch: {
        '$route': function() {
            this.updateRouteTagFilters();
            this.updateRoutePage();
            this.updateRouteLimt();
            this.queryPaginatedArticles();
            console.log(this.$route);
            // this.getPaginatedArticles({tags: this.queryTags, page: this.queryPage});
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
        console.log(this.$route);

        // this.getPaginatedArticles({tags: this.tags});
        // this.getPaginatedTags({});
    },

    beforeDestroy() {

    },

    components: {
        AppView: loader.container(),
        ArticlePreviewList: loader.component("article", "article-preview-list"),
        AppLink: loader.link()
    }
};
</script>

<style type="text/css">

</style>
