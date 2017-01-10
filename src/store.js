import Vue from 'vue'
import Vuex from "vuex";
// import article from "./modules/article/store";
// import tag from "./modules/tag/store";

Vue.use(Vuex);

const debug = true;

export default new Vuex.Store({

    modules: {
        // article,
        // tag
    },

    /**
     * If strict mode should be used
     */
    strict: debug,

    /**
     * Plugins for Vuex
     */
    // plugins: plugins
});
