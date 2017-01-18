const types = {
    fetchTags: 'tag/actions/fetchTags',
}

export {types};

import Api from 'api';

let actions =  {
    [types.fetchTags]: (context, payload ) => {

        let query = payload.query || {};

        return new Promise((resolve, reject) => {
            Api.tag.index({query}).then((response) => {
                console.log(response);
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        });

    }
}

export default actions;
