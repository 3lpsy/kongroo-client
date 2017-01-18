const types = {
    fetchArticles: 'article/actions/fetchArticles',
}

export {types};

import Api from 'api';

let actions =  {
    [types.fetchArticles]: (context, payload ) => {

        let query = payload.query || {};

        return new Promise((resolve, reject) => {
            Api.article.index({query}).then((response) => {
                console.log(response);
                resolve(response);
            }).catch((error) => {
                reject(error);
            })
        });

    }
}

export default actions;
