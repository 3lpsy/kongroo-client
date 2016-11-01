import * as mutations from "./../mutations/types";

import api from "./../../../../api/index";

const getPaginatedArticlesSuccess = (response, store, append) => {

}

const getPaginatedArticlesFailure = (response, store) => {

}

export const getPaginatedArticles = (store, {page = 1, limit = 10, tags = []}) => {

    console.log(mutations);
    api.article.paginate(page, limit, tags)
        .then(response => getPaginatedArticlesSuccess(response, store))
        .catch(response => getPaginatedArticlesFailure(response, store));

};
