import Vue from 'vue'
import VueResource from 'vue-resource'

const API_ROOT = process.env.API_ROOT

Vue.use(VueResource)

Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {withCredentials: true}
Vue.http.options.emulateJSON = true

Vue.http.interceptors.push((request, next) => {
    const token = 'Bearer ' + window.localStorage.getItem('token') || ''
    request.headers = request.headers || {}
    request.headers.set('Authorization', token);
    next((response) => {
        return response
    })
})

// mock data
if (process.env.API_SRC === 'mock') {
    require('./../mock/api/api')
}

export const Article = Vue.resource(API_ROOT + '/article/{/id}');


export const init = function() {
    return "api";
}
