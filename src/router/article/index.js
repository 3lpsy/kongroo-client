import IndexPage from 'pages/article/index/Index.vue';

export const index = {
    path: "/articles",
    name: "article.index",
    component: IndexPage,
    beforeEnter: (route, redirect, next) => {
        next();
    },
    beforeRouteLeave: (route, redirect, next) => {
        next();
    },
    meta: {
        canReuse: false
    }
}

import ShowPage from 'pages/article/show/Show.vue';

import store from 'store';

export const show = {
    path: "/articles/:articleId",
    name: "article.show",
    component: ShowPage,
    beforeEnter: (to, from, next) => {
        let articleId = to.params.articleId;

        if (! articleId) {
            // handle error
        }

        articleId = parseInt(articleId);
                
        store.commit("article/mutations/SET_ACTIVE_ID", {articleId});

        next();
    },
    beforeRouteLeave: (to, from, next) => {
        store.commit("article/mutations/SET_ACTIVE_ID", {articleId: null});
        next();
    }
}
