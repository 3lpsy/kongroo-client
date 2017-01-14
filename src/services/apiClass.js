import Service from './service';

export default class Api {

    addResource(resource, key) {
        if (this.isNested(key)) {
            this.addNestedResource(resource, key);
        }
        this.requiresService(key);
        this[key].addRoute('index', resource.index());
        this[key].addRoute('store', resource.store());
        this[key].addRoute('update', resource.update());
        this[key].addRoute('destroy', resource.destroy());
    }

    isNested(key) {
        return key.split(".").length > 1;
    }

    requiresService(key) {
        if (this.isNested(key)) {
            this.requiresNestedService(key);
        } else if (! this.hasService(key)) {
            this[key] = new Service();
        }
    }

    hasService(key) {
        return !! this[key];
    }

    addNestedResource(key) {

    }

}
