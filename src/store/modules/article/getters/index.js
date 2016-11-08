import * as types from './types';
import {paginatedArticles} from './paginatedArticles';
import {articleRepository} from './articleRepository';

export const getters = {
    [types.PAGINATED_ARTICLES]: paginatedArticles,
    [types.ARTICLE_REPOSITORY]: articleRepository,

}
