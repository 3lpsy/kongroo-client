const types = {
    fetchArticles: 'article/actions/fetchArticles',
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
                    articles.map((article) => {
                        context.commit(mutations.INSERT_ARTICLE, {article});
                    });

                    let pagination = paginationTransformer.get(response.data.meta.pagination);
                    context.commit(mutations.APPEND_PAGINATION, {pagination})
                    resolve(response);
                }
            }).catch((error) => {
                reject(error);
            })
        });
    }
}
