import IndexPage from 'pages/article/index/Index.vue';

export const index = {
    path: "/articles",
    name: "article.index",
    component: IndexPage,
    beforeEnter: (route, redirect, next) => {
        console.log("beforeEnter");
        next();
    },
    beforeRouteLeave: (route, redirect, next) => {
        console.log("beforeRouteLeave");
        next();
    },
    meta: {
        canReuse: false
    }
}

import ShowPage from 'pages/article/show/Show.vue';

export const show = {
    path: "/articles/:articleId",
    name: "article.show",
    component: ShowPage,
    beforeEnter: (route, redirect, next) => {
        console.log("beforeEnter");
        next();
    },
    beforeRouteLeave: (route, redirect, next) => {
        console.log("beforeRouteLeave");
        next();
    }
}
