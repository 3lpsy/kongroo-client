import {Factory} from './../../factory';
import {Resource} from './../resource';

const config = {};

class Tag extends Resource{

    constructor() {
        super();
        this.axios = new Factory(config).getInstance();
        this.routeParams = ["id"]
        this.template = "/tag/:id"
        this.queryParams = []
        this.forceArray = []
        this.history = [];
    }

}

export {Tag}
