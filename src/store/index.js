import Vue from 'vue'
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import plugins from "./plugins/index";
import article from "./modules/article";
import tag from "./modules/tag";

Vue.use(Vuex);

const debug = true;

export default new Vuex.Store({
    /**
     * Assign the actions to the store
     */
    actions,

    /**
     * Assign the getters to the store
     */
    getters,

    /**
     * Assign the modules to the store
     */

    modules: {
        article,
        tag
    },

    /**
     * If strict mode should be used
     */
    strict: debug,

    /**
     * Plugins for Vuex
     */
    plugins: plugins
});
