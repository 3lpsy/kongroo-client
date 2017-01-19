<template>
    <div>
        <page-container>
            <index-hero>
            </index-hero>
            <br><br>
            <vb-container>
                <vb-columns>
                    <vb-column class="is-two-thirds-desktop">
                        <article-preview-list>
                        </article-preview-list>
                    </vb-column
                </vb-columns>
            </vb-container>
        </page-container>
    </div>
</template>

<script>
import PageContainer from 'common/components/container/Container.vue';
import IndexHero from 'pages/article/index/IndexHero.vue';

import ArticlePreviewList from 'article/components/article-preview-list/ArticlePreviewList';

export default {
    data() {
        return {
            booted: false
        };
    },

    computed: {

    },

    methods: {

    },

    mounted() {
    },

    components: {
        PageContainer,
        IndexHero,
        ArticlePreviewList
    }
};
</script>

<style type="text/css">

</style>
