<template>
    <div>
        <app-view>
            <section class="hero is-primary">
                <div class="hero-body">
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
                </div>
            </section>
             <br><br>
            <div class="container">
                <article-show>
                </article-show>
            </div>
        </app-view>
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
        tagTags() {
            return this.tags.slice(0, 5);
        },
        queryTags() {
            let tags = this.$route.query["tags[]"] || [];
            if (! Array.isArray(tags)) {
                return [tags];
            }
            return tags;
        },
        queryPage() {
            return this.$route.query.page || 1
        },
        tags() {
            return this.$store.getters.paginatedTags;
        }
    },

    methods: {
        getArticle(...args) {
            this.$store.dispatch('getArticle', ...args)
        },
        capitalizeWord(word) {
            return word[0].toUpperCase() + word.substr(1);
        },
        capitalizeWords(str) {
            return str
                .toLowerCase()
                .split(' ')
                .map(function(word) {
                    return word[0].toUpperCase() + word.substr(1);
                })
                .join(' ');
        },
        capitalizeArray(wordArray) {
            return wordArray.map(word => {
                return this.capitalizeWords(word)
            });
        },
        csv(array) {
            return array.join(",").trim(',');
        },
        getPaginatedTags(...args) {
            this.$store.dispatch('getPaginatedTags', ...args)
        },

    },
    '$route': function() {
        this.getArticle();
    },

    beforeCreated(){

    },

    created() {

    },

    beforeMount(){

    },

    mounted() {
        this.getArticle(this.$route.params.articleId);
        this.getPaginatedTags({});

    },

    beforeDestroy(){

    },

    components: {
        AppView: loader.container(),
        ArticleShow: loader.component("article", "article-show"),
        AppLink: loader.link()
    }
};
</script>

<style type="text/css">

</style>
