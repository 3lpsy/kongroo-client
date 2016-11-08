import Vue from 'vue'
import VueResource from 'vue-resource'

const API_PROTOCOL = process.env.API_PROTOCOL
const API_PREFIX = process.env.API_PREFIX
const API_ROOT = process.env.API_ROOT

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.emulateJSON = true
Vue.http.options.root = API_PROTOCOL + API_ROOT + API_PREFIX

Vue.http.interceptors.push((request, next) => {
    const token = 'Bearer ' + window.localStorage.getItem('token') || ''
    request.headers = request.headers || {}
    request.headers.set('Authorization', token);
    console.log(request);
    next((response) => {
        console.log(response);
        console.log(response.data);

        return response
    })
})

// mock data
if (process.env.API_SRC === 'mock') {
    console.log("MOCKING");
    require('./../mock/api/api')
}

export const Article = Vue.resource('article{/id}');

export const Tag = Vue.resource('tag{/id}');

export const init = function() {
    return "api";
}
