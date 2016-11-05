import * as types from "./types";
import {getPaginatedArticles} from './getPaginatedArticles';
import {queryPaginatedArticles} from './queryPaginatedArticles';
import {getArticle} from './getArticle';

export const actions = {
    [types.GET_PAGINATED_ARTICLES]: getPaginatedArticles,
    [types.QUERY_PAGINATED_ARTICLES]: queryPaginatedArticles,
    [types.GET_ARTICLE]: getArticle
}
