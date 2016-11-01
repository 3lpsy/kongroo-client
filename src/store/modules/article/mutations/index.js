import {
    SET_PAGINATED_ARTICLES_SUCCESS,
    SET_PAGINATED_ARTICLES_FAILURE,
    APPEND_PAGINATED_ARTICLES_SUCCESS,
    SET_PAGINATED_ARTICLES_QUERY_TAGS,
    SET_PAGINATED_ARTICLES_IS_LOADING,
    SET_PAGINATED_ARTICLES_IS_LOADED,
    SET_ARTICLE,
    SET_ARTICLE_SUCCESS,
    SET_ARTICLE_FAILURE,
    CLEAR_ARTICLES
} from "./types";

import { state as baseState } from "./../state";

// state is the module (state == state)
export const mutations = {
    [SET_PAGINATED_ARTICLES_SUCCESS] (state, {articles, pagination}) {
        state.paginated.data = articles;
        state.paginated.meta.pagination = pagination;
    },
    [SET_PAGINATED_ARTICLES_FAILURE] (state) {
        state.paginated = baseState;
    },
    [APPEND_PAGINATED_ARTICLES_SUCCESS] (state, {articles, pagination}) {
        state.paginated.data = state.paginated.data.concat(articles);
        state.paginated.meta.pagination = pagination;
    },
    [SET_PAGINATED_ARTICLES_QUERY_TAGS] (state, tags) {
        state.paginated.meta.filters.tags = tags;
    },
    [SET_PAGINATED_ARTICLES_IS_LOADING] (state) {
        state.paginated.meta.isLoading = true;
    },
    [SET_PAGINATED_ARTICLES_IS_LOADED] (state) {
        state.paginated.meta.isLoading = false;
        state.paginated.meta.isFirstLoaded = true;
        state.paginated.meta.isComplete = !state.paginated.meta.pagination.hasMore;
    },
    [SET_ARTICLE] (state, article) {
        state.article = article;
    },
    [SET_ARTICLE_SUCCESS] (state, article) {
        state.article.data = article;
    },
    [SET_ARTICLE_FAILURE] (state) {
    },
    [CLEAR_ARTICLES] (state) {
        state = baseState;
    }
};
