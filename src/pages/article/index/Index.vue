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
                            <article-preview-list>
                            </article-preview-list>
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
import ArticlePreviewList from 'article/components/article-preview-list/ArticlePreviewList';
import TagSideMenu from 'tag/components/tag-side-menu/TagSideMenu';

export default {
    data() {
        return {
            booted: false
        };
    },

    computed: {

    },
    components: {
        PageContainer,
        IndexHero,
        ArticlePreviewList,
        TagSideMenu
    }
};
</script>

<style type="text/css">

</style>
