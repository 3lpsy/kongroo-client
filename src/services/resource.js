import Route from './route';

const defaultMethods = [
    'index', 'indexMany',
    'store', 'storeMany',
    'update', 'updateMany',
    'destroy', 'destroyMany'
];
export default class Resource {

    constructor(template, config = {}) {
        template = this.prefixSlash(template);
        template = this.chopSlash(template);
        this.template = template;
        if (! config.methods) {
            config.methods = defaultMethods;
        }
        this.config = config;
        this.extractParams(template);
    }

    index() {
        let params = [];
        let template = this.template;
        let options = {};
        // remove final id from template
        return new Route(template, params, options);
    }

    indexMany() {
        let params = [];
        let template = this.template;
        let options = {};
        // remove final id from template
        return new Route(template, params, options);
    }

    store() {
        let params = [];
        let template = this.template;
        let options = {};
        // remove final id from template
        return new Route(template, params, options);
    }

    storeMany() {
        let params = [];
        let template = this.template;
        let options = {};
        // remove final id from template
        return new Route(template, params, options);
    }

    update() {
        let params = [];
        let template = this.template;
        let options = {};
        // remove final id from template
        return new Route(template, params, options);
    }

    updateMany() {
        let params = [];
        let template = this.template;
        let options = {};
        // remove final id from template
        return new Route(template, params, options);
    }

    destroy() {
        let params = [];
        let template = this.template;
        let options = {};
        // remove final id from template
        return new Route(template, params, options);
    }

    destroyMany() {
        let params = [];
        let template = this.template;
        let options = {};
        // remove final id from template
        return new Route(template, params, options);
    }


    extractParams(template) {
        template = template || this.template;
        let regex = new RegExp('.+:(\w+)/', 'g');
        let params = regex.exec(template);
        if (! params) {
            params = [];
        }
        this.params = params;
    }

    prefixSlash(template) {
        return template;
    }

    chopSlash(template) {
        return template;
    }
}
