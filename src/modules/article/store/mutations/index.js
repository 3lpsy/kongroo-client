const types = {
    INSERT_ARTICLE: 'article/mutations/INSERT_ARTICLE',
    INSERT_ARTICLES: 'article/mutations/INSERT_ARTICLES',
    APPEND_PAGINATION: 'article/mutations/APPEND_PAGINATION',
    CLEAR_ARTICLES: 'article/mutations/CLEAR_ARTICLES',
    SET_ACTIVE_ID: 'article/mutations/SET_ACTIVE_ID',


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
    [types.INSERT_ARTICLES]: (state, payload = {}) => {
        let inserts = payload.articles;

        if (! inserts) {
            throw new VuexError("No Articles to Insert.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Insert To.");
        }

        if (! state.repo.articles) {
            throw new VuexError("No Repo Articles to Insert To.");
        }

        inserts.map((insert) => {

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

        });

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

    },
    [types.CLEAR_ARTICLES]: (state, payload = {}) => {

        if (! state.repo) {
            throw new VuexError("No Repo to Clear.");
        }

        if (! state.repo.articles) {
            throw new VuexError("No Repo Articles to Insert To.");
        }
        state.repo.articles = [];

    },
    [types.SET_ACTIVE_ID]: (state, payload = {}) => {

        if (! payload.articleId) {
            throw new VuexError("No Article ID to Set.");
        }

        state.activeId = payload.articleId;

    }
}
