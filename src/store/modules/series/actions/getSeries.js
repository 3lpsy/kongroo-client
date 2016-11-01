import * as mutations from "./../mutations/types";

import api from "./../../../../api/index";

const getSeriesSuccess = (response, store, append) => {

}

const getSeriesFailure = (response, store) => {

}

export const getSeries = (store, id) => {
    console.log(mutations);
    api.article.get({id})
        .then(response => getSeriesSuccess(response, store))
        .catch(response => getSeriesFailure(response, store));

};
