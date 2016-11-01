import * as mutations from "./../mutations/types";

import api from "./../../../../api/index";

const getAuthorSuccess = (response, store, append) => {

}

const getAuthorFailure = (response, store) => {

}

export const getAuthor = (store, id) => {

    console.log(mutations);
    api.article.get({id})
        .then(response => getAuthorSuccess(response, store))
        .catch(response => getAuthorFailure(response, store));

};
