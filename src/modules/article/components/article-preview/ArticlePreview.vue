<template>
    <div>
        <transition appear name="slide-fade">
            <div class="card is-fullwidth">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-32x32">
                                <img src="http://placehold.it/64x64" alt="Image">
                            </figure>
                        </div>
                      <div class="media-content">
                            <p class="title is-5">
                                <router-link :to="{name: 'article.show', params: {articleId: article.id}}">
                                    {{article.title}}
                                </router-link>
                            </p>
                        <p class="subtitle is-6">@{{article.author.username}}</p>
                      </div>
                    </div>
                    <div class="card-image">
                        <figure class="image is-128x32">
                            <img src="http://placehold.it/256x64" alt="">
                        </figure>
                    </div>

                    <div class="content">
                        {{article.subTitle}}
                        <!-- <app-link
                                v-for="tag in article.tags"
                                v-if="tag.id"
                                class="ArticlePreview__tag-link Link"
                                r-route="article.index"
                                :r-params="{}"
                                :r-query="{'tags[]': [tag.id]}"
                                :query-only="true">
                                <span slot="link">
                                    #{{tag.name}} &nbsp;
                                </span>
                        </app-link> -->
                        <br>
                  <small>
                      {{article.publishedAt.diffForHumans}}
                  </small>
                </div>
              </div>
            </div>
</transition>
            <br>

    </div>
</template>

<script>

import ArticleTitle from 'article/components/article-preview/ArticleTitle';
import ArticleMeta from 'article/components/article-preview/ArticleMeta';

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

    components: {
        ArticleTitle,
        ArticleMeta
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
