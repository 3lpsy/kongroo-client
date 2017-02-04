import Vue from 'vue'
import Router from "vue-router";

Vue.use(Router);

import * as article from "./article";
import * as auth from "./auth";

let routes = [
    article.index,
    article.show,
    auth.login.index,
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
