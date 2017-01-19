import Vue from 'vue'
import Router from "vue-router";

Vue.use(Router);

import * as article from "./article";

let routes = [
    article.index,
    article.show,
    {
        path: "/",
        redirect: "/articles"
    }
];

export default new Router({
    linkActiveClass: 'active',
    routes,
    mode: "hash"
});
