import Vue from 'vue'
import Router from "vue-router";

Vue.use(Router);

import * as article from "./article";
import * as auth from "./auth";

let routes = [
    article.index,
    
    article.show,
    auth.login.index,
    auth.login.credential.index,
    auth.login.email.index,
    auth.login.sms.index,
    auth.login.authenticate.index,
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
