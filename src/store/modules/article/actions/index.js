import * as types from "./types";
import {getPaginatedArticles} from './getPaginatedArticles';
import {getArticle} from './getArticle';

export const actions = {
    [types.GET_PAGINATED_ARTICLES]: getPaginatedArticles,
    [types.GET_ARTICLE]: getArticle

}
