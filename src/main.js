
import Vue from 'vue'
import store from './store';
import router from './router'
import { sync } from 'vuex-router-sync'
import App from './App';
import VbComponents from './modules/vb/components';

sync(store, router);

console.log(VbComponents);

Vue.use(VbComponents);

import Api from './services/api';

console.log(Api.article.index());

console.log("no err");
new Vue({
    router,
    store,
    ...App // Object spread copying everything from App.vue
}).$mount('app');
