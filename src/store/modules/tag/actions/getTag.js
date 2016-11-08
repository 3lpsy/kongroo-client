import * as mutations from "./../mutations/types";

import api from "./../../../../api/index";

const getTagSuccess = (response, store, append) => {

}

const getTagFailure = (response, store) => {

}

export const getTag = (store, id) => {

    console.log(mutations);
    api.article.get({id})
        .then(response => getTagSuccess(response, store))
        .catch(response => getTagFailure(response, store));

};
