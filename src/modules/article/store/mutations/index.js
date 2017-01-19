const types = {
    INSERT_ARTICLE: 'article/mutations/INSERT_ARTICLE',
    APPEND_PAGINATION: 'article/mutations/APPEND_PAGINATION',

}

export {types};

import VuexError from "errors/VuexError";

export default {
    [types.INSERT_ARTICLE]: (state, payload = {}) => {
        let insert = payload.article;

        if (! insert) {
            throw new VuexError("No Article to Insert.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Insert To.");
        }

        if (! state.repo.articles) {
            throw new VuexError("No Repo Articles to Insert To.");
        }

        let exists = state.repo.articles.indexOf((article) => {
            return article.id === insert.id;
        }) !== -1;

        if (exists) {
            state.repo.articles = state.repo.articles.map((article) => {
                if (article.id === insert.id) {
                    return insert;
                }
                return article;
            });
        } else {
            state.repo.articles.push(insert);
        }
    },
    [types.APPEND_PAGINATION]: (state, payload = {}) => {
        let append = payload.pagination;

        if (! append) {
            throw new VuexError("No Article to Append.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Append To.");
        }

        if (! state.repo.meta) {
            throw new VuexError("No Repo Meta to Append To.");
        }

        if (! state.repo.meta.paginations) {
            throw new VuexError("No Repo Meta Paginations to Append To.");
        }

        state.repo.meta.paginations.push(append);

    }
}
