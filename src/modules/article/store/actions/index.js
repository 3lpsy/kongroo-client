const types = {
    fetchArticles: 'article/actions/fetchArticles',
    fetchArticle: 'article/actions/fetchArticle',
    clearArticles: 'article/actions/clearArticles',
}

export {types};

import api from 'api';
import articleTransformer from "article/transformer"
import paginationTransformer from "common/transformer/pagination"

import {types as mutations} from "article/store/mutations";

export default  {
    [types.fetchArticles]: (context, payload ) => {

        let query = payload.query || {};

        return new Promise((resolve, reject) => {
            api.service('article').index({query}).then((response) => {
                if (response.status === 200 && response.data) {

                    let articles = articleTransformer.getCollection(response.data.articles);
                    context.commit(mutations.INSERT_ARTICLES, {articles});

                    let pagination = paginationTransformer.get(response.data.meta.pagination);
                    context.commit(mutations.APPEND_PAGINATION, {pagination})
                    resolve(response);
                }
            }).catch((error) => {
                reject(error);
            })
        });
    },
    [types.fetchArticle]: (context, payload ) => {

        let articleId = payload.articleId;
        let params = {articleId};
        let query = payload.query || {};

        return new Promise((resolve, reject) => {
            api.service('article').show({params, query}).then((response) => {
                if (response.status === 200 && response.data) {

                    let article = articleTransformer.get(response.data.article);

                    context.commit(mutations.INSERT_ARTICLE, {article});
                    resolve(response);
                }
            }).catch((error) => {
                reject(error);
            })
        });
    },
    [types.clearArticles]: (context) => {

        return new Promise((resolve, reject) => {
            context.commit(mutations.CLEAR_ARTICLES)
        });
    }
}
