import * as mutations from "./../mutations/types";

import * as api from "./../../../../api/index";

const queryPaginatedArticlesSuccess = (response, store, append) => {
    console.log(mutations);
    console.log('query success');
}

const queryPaginatedArticlesFailure = (response, store) => {
    console.log('query failure');
}

export const queryPaginatedArticles = (store, meta, filters) => {

    return new Promise( (resolve, reject) => {

        const query = Object.assign(meta, filters);
        return api.Article.query(query)
            .then(response => {
                queryPaginatedArticlesSuccess(response, store)
                resolve();
            })
            .catch(response => {
                queryPaginatedArticlesFailure(response, store)
                reject();
            });

    });



};
