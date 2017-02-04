<template>
    <div>
        <page-container>
            <index-hero>
            </index-hero>
            <!-- <br><br> -->
            <vb-section>
                <vb-container>
                    <vb-columns>
                        <vb-column class="is-three-quarters-desktop">
                            <article-show>
                            </article-show>
                        </vb-column>
                        <vb-column class="is-one-quarter-desktop">
                            <tag-side-menu>
                            </tag-side-menu>
                        </vb-column>
                    </vb-columns>
                </vb-container>
            </vb-section>
        </page-container>
    </div>
</template>

<script>
import PageContainer from 'pages/article/container/Container.vue';
import IndexHero from 'pages/article/index/IndexHero.vue';
import ArticleShow from 'article/components/article-show/ArticleShow';
import TagSideMenu from 'tag/components/tag-side-menu/TagSideMenu';

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
        ArticleShow,
        TagSideMenu
    }
};
</script>

<style type="text/css">

</style>
