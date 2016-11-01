import * as mutations from "./../mutations/types";

import api from "./../../../../api/index";

const getTagSuccess = (response, store) => {

}

const getTagFailure = (response) => {

}

export const getTag = (store, id) => {
    // check if data has page and limit
    // check if data is updated
    console.log(mutations);

    return api.tag.get({id})
        .then(response => getTagSuccess(response, store))
        .catch(response => getTagFailure(response, store));
}
