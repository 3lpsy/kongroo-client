import Vue from 'vue'
import Vuex from "vuex";
import article from "article/store";
import tag from "tag/store";
import auth from "auth/store";
import message from "message/store";
import error from "error/store";

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex);

const debug = true;

export default new Vuex.Store({

    modules: {
        article,
        tag,
        message,
        error,
        auth
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
