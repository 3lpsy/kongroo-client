<template lang="html">
    <vb-hero>
        <vb-hero-body>
            <vb-container centered>
                <vb-hero-title>
                      Articles
                </vb-hero-title>
            </vb-container>
        </vb-hero-body>
        <vb-hero-foot>
            <vb-tabs>
                <vb-tab v-for="tag in tabs" :active="isActiveTab(tag)">
                    <router-link
                        v-if="tag && tag.id"
                        :to="{name: 'article.index', query: { 'tags[]': tag.id}}">
                        {{tag.name}}
                    </router-link>
                </vb-tab>
            </vb-tabs>
        </vb-hero-foot>
    </vb-hero>
</template>

<script>

import queryTagIds from "tag/mixins/queryTagIds";

export default {
    mixins: [queryTagIds],
    computed: {
        tags() {
            return this.$store.getters['tag/getters/tags'];
        },
        tabs() {
            if (! this.tags) {
                return [];
            }

            let count = 0;

            return this.tags.map((tag) => {
                count = count + 1;
                if (count <= 5) {
                    return tag;
                }
                return false;
            }).filter(tag => !! tag);
        }
    },
    methods: {
        fetchTags() {
            let query = {
                sortBy: 'articleCount',
                allTags: false
            }
            this.$store.dispatch("tag/actions/fetchTags", {query}).then((tags) => {
                console.log('Fetched');
            }).catch((error) => {
                throw error;
            });
        },
        isActiveTab(tag) {
            if (! this.tags || this.tags.length < 1) {
                return false;
            }
            if (! this.queryTagIds || this.queryTagIds.length !== 1) {
                return false;
            }
            if (! tag || ! tag.id) {
                return false;
            }

            return this.queryTagIds.findIndex((id) => {
                return id === tag.id;
            }) !== -1
        }
    },
    mounted() {
        this.fetchTags();
    }
}
</script>

<style lang="css">
</style>
