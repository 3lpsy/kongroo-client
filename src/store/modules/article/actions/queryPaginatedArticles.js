import * as mutations from "./../mutations/types";
import * as api from "./../../../../api/index";
import transformer from "./../../../../transformers/article";

const queryPaginatedArticlesSuccess = (response, context, append) => {
    let articles = transformer.getCollection(response.data.articles)
    let meta = response.data.meta;
    context.commit(mutations.SET_PAGINATED_ARTICLES_SUCCESS, {articles, meta});
    context.commit(mutations.APPEND_ARTICLE_REPOSITORY_SUCCESS, articles);
    console.log('query success');
}

const queryPaginatedArticlesFailure = (error, context) => {
    console.log(error);
    console.log('query failure');
}

export const queryPaginatedArticles = (context, meta, filters) => {

    return new Promise( (resolve, reject) => {

        const query = Object.assign(meta, filters);

        return api.Article.get(query)
            .then((response) => {
                queryPaginatedArticlesSuccess(response, context)
                resolve();
            })
            .catch((error) => {
                queryPaginatedArticlesFailure(error, context)
                reject(error);
            });

    });

};
