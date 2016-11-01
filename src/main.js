
import Vue from 'vue'
import VuexRouterSync from 'vuex-router-sync'

import loader from "./utils/loader";

console.log('store');
let store = loader.provider("store");
let router = loader.provider("router");

let api = loader.provider("api");
let rootComponent = require("./App.vue");

VuexRouterSync.sync(store, router)

console.log(api.init());

const app = new Vue({
    router,
    store,
    ...rootComponent // Object spread copying everything from App.vue
}).$mount('app')

export { app, router, store }
