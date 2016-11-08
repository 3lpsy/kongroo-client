
import Vue from 'vue'
import sync from './sync/index';
import loader from "./utils/loader";

let store = loader.provider("store");
let router = loader.provider("router");

let api = loader.api();
api.init();
let rootComponent = require("./App.vue");

sync(store, router)

new Vue({
    router,
    store,
    ...rootComponent // Object spread copying everything from App.vue
}).$mount('app');
