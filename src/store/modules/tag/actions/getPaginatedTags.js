import * as mutations from "./../mutations/types";

import api from "./../../../../api/index";

const getPaginatedTagsSuccess = (response, store, append) => {

}

const getPaginatedTagsFailure = (response, store) => {

}

export const getPaginatedTags = (store, {page = 1, limit = 10}) => {

    // check if data has page and limit
    // check if data is updated
    console.log(mutations);
    return api.tag.paginate({page, limit})
        .then(response => getPaginatedTagsSuccess(response, store))
        .catch(response => getPaginatedTagsFailure(response, store));

};
