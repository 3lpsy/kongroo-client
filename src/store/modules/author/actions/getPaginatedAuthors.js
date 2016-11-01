import * as mutations from "./../mutations/types";

import api from "./../../../../api/index";

const getPaginatedAuthorsSuccess = (response, store, append) => {

}

const getPaginatedAuthorsFailure = (response, store) => {

}

export const getPaginatedAuthors = (store, {page = 1, limit = 10, tags = []}) => {

    console.log(mutations);
    api.article.paginate(page, limit, tags)
        .then(response => getPaginatedAuthorsSuccess(response, store))
        .catch(response => getPaginatedAuthorsFailure(response, store));

};
