<template>
    <div>
        <header>
             <h2 class="ArticlePreview__title">
                <router-link :to="{name: 'article.show', params: {articleId: article.id}}">
                    {{article.title}}
                </router-link>
            </h2>
        </header>
    </div>
</template>

<script>
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

        beforeCreated () {

        },

        created () {

        },

        beforeMount () {

        },

        mounted () {
        },

        beforeDestroy () {

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
