import Vue from 'vue'
import Vuex from "vuex";
import article from "article/store";
import tag from "tag/store";
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const debug = true;

export default new Vuex.Store({

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
    plugins: [createLogger()]
});
