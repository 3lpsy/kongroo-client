<template>
    <div>
        <page-container>
            <vb-hero>
                <vb-hero-title>
                    <h1 class="title">
                      Articles
                    </h1>
                    <h2 class="subtitle">
                    </h2>
                </vb-hero-body>
                <vb-hero-foot>
                    <vb-tabs>
                        <vb-tab v-for="tag in tabTags">
                            <router-link
                                v-if="tag.id"
                                :to="{
                                    name: 'article.index',
                                    query: {
                                        "tags[]": tag.id
                                    }
                                }">
                                {{tag.name}}
                            </router-link>
                        </vb-tab>
                    </vb-tabs>
                </vb-hero-foot>
            </vb-hero>
            <br><br>
            <vb-container>
                <vb-columns>
                    <vb-column class="is-two-thirds-desktop">
                        <!-- <article-preview-list>
                        </article-preview-list> -->
                    </vb-column
                </vb-columns>
            </vb-container>
        </page-container>
        <p>Index.vue</p>
    </div>
</template>

<script>
import PageContainer from 'common/components/container/Container.vue';
// import ArticlePreviewList from 'article/components/article-preview-list/ArticlePreviewList';

export default {
    data() {
        return {
            booted: false
        };
    },

    computed: {
        tags() {
            return this.$store.getters['tag/tags'];
        },
        tabTags() {
            if (! this.tabs) {
                return [];
            }

            let count = 0;

            return this.tags.map((tag) => {
                if (count < 5) {
                    return tag;
                }
                count++;
            })
        }
    },

    methods: {
        fetchTags() {
            let query = {
                sortBy: 'articleCount',
                allTags: false
            }

            this.$store.dispatch("tag/fetch", {query}).then((tags) => {
                console.log('Fetched');
            }).catch((error) => {
                throw error;
            });
        }
    },

    mounted() {
        this.fetchTags();
    },

    components: {
        PageContainer
        // ArticlePreviewList
    }
};
</script>

<style type="text/css">

</style>
