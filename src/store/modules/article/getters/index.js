import * as types from './types';
import {paginatedArticles} from './paginatedArticles';
import {paginatedArticlesMeta} from './paginatedArticlesMeta';
import {articleRepository} from './articleRepository';

export const getters = {
    [types.PAGINATED_ARTICLES]: paginatedArticles,
    [types.PAGINATED_ARTICLES_META]: paginatedArticlesMeta,
    [types.ARTICLE_REPOSITORY]: articleRepository,

}
