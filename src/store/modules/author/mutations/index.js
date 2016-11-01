import {
    SET_PAGINATED_AUTHORS_SUCCESS,
    SET_PAGINATED_AUTHORS_FAILURE,
    APPEND_PAGINATED_AUTHORS_SUCCESS,
    SET_PAGINATED_AUTHORS_QUERY_TAGS,
    SET_PAGINATED_AUTHORS_IS_LOADING,
    SET_PAGINATED_AUTHORS_IS_LOADED,
    SET_AUTHOR,
    SET_AUTHOR_SUCCESS,
    SET_AUTHOR_FAILURE,
    CLEAR_AUTHORS
} from "./types";

import { state as baseState } from "./../state";

// state is the module (state == state)
export const mutations = {
    [SET_PAGINATED_AUTHORS_SUCCESS] (state, {authors, pagination}) {
        state.paginated.data = authors;
        state.paginated.meta.pagination = pagination;
    },
    [SET_PAGINATED_AUTHORS_FAILURE] (state) {
        state.paginated = baseState;
    },
    [APPEND_PAGINATED_AUTHORS_SUCCESS] (state, {authors, pagination}) {
        state.paginated.data = state.paginated.data.concat(authors);
        state.paginated.meta.pagination = pagination;
    },
    [SET_PAGINATED_AUTHORS_QUERY_TAGS] (state, tags) {
        state.paginated.meta.filters.tags = tags;
    },
    [SET_PAGINATED_AUTHORS_IS_LOADING] (state) {
        state.paginated.meta.isLoading = true;
    },
    [SET_PAGINATED_AUTHORS_IS_LOADED] (state) {
        state.paginated.meta.isLoading = false;
        state.paginated.meta.isFirstLoaded = true;
        state.paginated.meta.isComplete = !state.paginated.meta.pagination.hasMore;
    },
    [SET_AUTHOR] (state, author) {
        state.author = author;
    },
    [SET_AUTHOR_SUCCESS] (state, author) {
        state.author.data = author;
    },
    [SET_AUTHOR_FAILURE] (state) {
    },
    [CLEAR_AUTHORS] (state) {
        state = baseState;
    }
};
