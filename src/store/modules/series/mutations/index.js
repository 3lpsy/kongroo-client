import {
    SET_PAGINATED_SERIES_SUCCESS,
    SET_PAGINATED_SERIES_FAILURE,
    APPEND_PAGINATED_SERIES_SUCCESS,
    SET_PAGINATED_SERIES_QUERY_TAGS,
    SET_PAGINATED_SERIES_IS_LOADING,
    SET_PAGINATED_SERIES_IS_LOADED,
    SET_SERIES,
    SET_SERIES_SUCCESS,
    SET_SERIES_FAILURE,
    CLEAR_SERIES
} from "./types";

import { state as baseState } from "./../state";

// state is the module (state == state)
export const mutations = {
    [SET_PAGINATED_SERIES_SUCCESS] (state, {series, pagination}) {
        state.paginated.data = series;
        state.paginated.meta.pagination = pagination;
    },
    [SET_PAGINATED_SERIES_FAILURE] (state) {
        state.paginated = baseState;
    },
    [APPEND_PAGINATED_SERIES_SUCCESS] (state, {series, pagination}) {
        state.paginated.data = state.paginated.data.concat(series);
        state.paginated.meta.pagination = pagination;
    },
    [SET_PAGINATED_SERIES_QUERY_TAGS] (state, tags) {
        state.paginated.meta.filters.tags = tags;
    },
    [SET_PAGINATED_SERIES_IS_LOADING] (state) {
        state.paginated.meta.isLoading = true;
    },
    [SET_PAGINATED_SERIES_IS_LOADED] (state) {
        state.paginated.meta.isLoading = false;
        state.paginated.meta.isFirstLoaded = true;
        state.paginated.meta.isComplete = !state.paginated.meta.pagination.hasMore;
    },
    [SET_SERIES] (state, series) {
        state.series = series;
    },
    [SET_SERIES_SUCCESS] (state, series) {
        state.series.data = series;
    },
    [SET_SERIES_FAILURE] (state) {
    },
    [CLEAR_SERIES] (state) {
        state = baseState;
    }
};
