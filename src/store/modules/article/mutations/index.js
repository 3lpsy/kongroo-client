import * as types from "./types";
import {appendArticleRepositorySuccess} from "./appendArticleRepositorySuccess";
import {setPaginatedArticlesSuccess} from "./setPaginatedArticlesSuccess";
import {setPaginatedArticlesFailure} from "./setPaginatedArticlesFailure";

export const mutations = {
    [types.SET_PAGINATED_ARTICLES_SUCCESS]: setPaginatedArticlesSuccess,
    [types.SET_PAGINATED_ARTICLES_FAILURE]: setPaginatedArticlesFailure,
    [types.APPEND_ARTICLE_REPOSITORY_SUCCESS]: appendArticleRepositorySuccess,
};
