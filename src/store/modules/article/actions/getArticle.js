import * as mutations from "./../mutations/types";

import api from "./../../../../api/index";

const getArticleSuccess = (response, store, append) => {

}

const getArticleFailure = (response, store) => {

}

export const getArticle = (store, id) => {

    console.log(mutations);
    api.article.get({id})
        .then(response => getArticleSuccess(response, store))
        .catch(response => getArticleFailure(response, store));

};
