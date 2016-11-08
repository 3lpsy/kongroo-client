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
                      </h2>
                    </div>
                </div>
                <div class="hero-foot">
                    <div class="container has-text-centered">
                        <nav class="tabs is-boxed is-fullwidth">
                            <ul>
                                <li class="" v-for="tag in menuTags">
                                    <app-link
                                        v-if="tag.id"
                                        class="ArticlePreview__tag-link Link"
                                        r-route="article.index"
                                        :r-params="{}"
                                        :r-query="{'tags[]': [tag.id]}"
                                        :query-only="true">
                                        <span slot="link">
                                            {{tag.name}}
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
                <div class="columns">
                    <div class=" column is-two-thirds-desktop">
                        <article-preview-list>
                        </article-preview-list>
                    </div>
                </div>
            </div>
        </app-view>
    </div>
</template>

<script>
import loader from "../../../utils/loader";

export default {
    data() {
        return {};
    },

    computed: {
        tags() {
            return this.$store.getters['tag/getters/tagRepository'];
        },
        menuTags() {
            return this.tags.slice(0, 5);
        }
    },

    methods: {
        getAllTags() {
            this.$store.dispatch('tag/actions/getAllTags').then(() => {

            }).catch( (error) => {
                console.log(error);
            });
        }
    },

    watch: {

    },

    beforeCreated(){

    },

    created() {

    },

    beforeMount(){

    },

    mounted() {
        this.getAllTags();
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
