import {Factory} from './../../factory';
import {Resource} from './../resource';

const config = {};

class Article extends Resource{

    constructor() {
        super()
        this.axios = new Factory(config).getInstance();
        this.routeParams = ["id"]
        this.route = "/article/:id"
        this.queryParams = ["filters", "tags"]
        this.forceArray = ["filters", "tags"]
        this.history = [];
    }

}

export {Article}
