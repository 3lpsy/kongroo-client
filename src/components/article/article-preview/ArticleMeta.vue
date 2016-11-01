<template>
    <div>
        <p class="ArticlePreview__meta">
            {{article.publishedAt.diffForHumans}} in
                <app-link
                    v-for="tag in article.tags"
                    v-if="tag.id"
                    class="ArticlePreview__tag-link Link"
                    r-route="article.index"
                    :r-params="{}"
                    :r-query="{'tags[]': [tag.id]}"
                    :query-only="true">
                    <span slot="link">
                        {{tag.name}} <span v-if="! isLastTag(tag)">,</span>
                    </span>
                </app-link>
        </p>
    </div>
</template>

<script>
    import loader from "../../../utils/loader";

    export default {

        props: {

            dataArticle: {
                required: true
            }

        },

        computed: {
            article () {
                return this.dataArticle
            }
        },

        methods: {

            isLastTag: function (tag) {
                const lastIndex = this.article.tags.length - 1;
                if (this.article.tags.indexOf(tag) === lastIndex) {
                    return true;
                }
                return false;
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

            AppLink: loader.link()

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
