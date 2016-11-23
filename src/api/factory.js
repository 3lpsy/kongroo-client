import Axios from "axios";

const API_PROTOCOL = process.env.API_PROTOCOL
const API_PREFIX = process.env.API_PREFIX
const API_ROOT = process.env.API_ROOT

Axios.defaults.baseURL = API_PROTOCOL + API_ROOT + API_PREFIX;

const defaultConfig = {
    baseURL: API_PROTOCOL + API_ROOT + API_PREFIX,
    timeout: 1000,
    headers: {
        'Authorization': 'Bearer ' + window.localStorage.getItem('token') || ''
    },
    withCredentials: true
}

class Factory {

    constructor(config = {}) {
        this.config = Object.assign(defaultConfig, config)
    }

    getInstance() {
        if (! this.instance) {
            this.setInstance()
        }
        return this.instance;
    }

    setInstance() {
        this.instance = Axios.create(this.config)
    }
}

export {Factory};
