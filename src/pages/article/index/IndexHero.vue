<template lang="html">
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
                        <li class="" v-for="tag in menuTags" v-if="tag.id">
                            <app-link
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

</template>

<script>
import loader from "../../../utils/loader";
export default {
    computed: {
        tags() {
            return this.$store.getters['tag/getters/tagRepository'];
        },
        menuTags() {
            return this.tags.slice(0, 5);
        }
    },
    components: {
        AppLink: loader.link(),
    }
}
</script>

<style lang="css">
</style>
