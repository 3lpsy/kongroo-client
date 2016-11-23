import {Article as ArticleResource} from './resources/article/index';
import {Tag as TagResource} from './resources/tag/index';

export const Article = new ArticleResource();

export const Tag = new TagResource();

export const init = function() {
    return "api";
}

//
// Vue.http.options.crossOrigin = true
// Vue.http.options.xhr = {withCredentials: true}
// Vue.http.options.emulateJSON = true
// Vue.http.options.root = API_PROTOCOL + API_ROOT + API_PREFIX
//
// Vue.http.interceptors.push((request, next) => {
//     const token = 'Bearer ' + window.localStorage.getItem('token') || ''
//     request.headers = request.headers || {}
//     request.headers.set('Authorization', token);
//     next((response) => {
//         return response
//     })
// })

// mock data
// if (process.env.API_SRC === 'mock') {
//     console.log("MOCKING");
//     require('./../mock/api/api')
// }
