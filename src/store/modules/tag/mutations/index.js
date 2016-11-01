import {
    SET_PAGINATED_TAGS_SUCCESS,
    SET_PAGINATED_TAGS_FAILURE,
    APPEND_PAGINATED_TAGS_SUCCESS,
    SET_PAGINATED_TAGS_QUERY_TAGS,
    SET_PAGINATED_TAGS_IS_LOADING,
    SET_PAGINATED_TAGS_IS_LOADED,
    SET_TAG,
    SET_TAG_SUCCESS,
    SET_TAG_FAILURE,
    CLEAR_TAGS
} from "./types";

import { state as baseState } from "./../state";

// state is the module (state == state)
export const mutations = {
    [SET_PAGINATED_TAGS_SUCCESS] (state, {tags, pagination}) {
        console.log("setting it");
        state.paginated.data = tags;
        state.paginated.meta.pagination = pagination;
    },
    [SET_PAGINATED_TAGS_FAILURE] (state) {
        state.paginated = baseState;
    },
    [APPEND_PAGINATED_TAGS_SUCCESS] (state, {tags, pagination}) {
        state.paginated.data = state.paginated.data.concat(tags);
        state.paginated.meta.pagination = pagination;
    },
    [SET_PAGINATED_TAGS_QUERY_TAGS] (state, tags) {
        state.paginated.meta.filters.tags = tags;
    },
    [SET_PAGINATED_TAGS_IS_LOADING] (state) {
        state.paginated.meta.isLoading = true;
    },
    [SET_PAGINATED_TAGS_IS_LOADED] (state) {
        state.paginated.meta.isLoading = false;
        state.paginated.meta.isFirstLoaded = true;
        state.paginated.meta.isComplete = !state.paginated.meta.pagination.hasMore;
    },
    [SET_TAG] (state, tag) {
        state.tag = tag;
    },
    [SET_TAG_SUCCESS] (state, tag) {
        state.tag.data = tag;
    },
    [SET_TAG_FAILURE] (state) {
    },
    [CLEAR_TAGS] (state) {
        state = baseState;
    }
};
