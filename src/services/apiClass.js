import Service from './service';

export default class Api {

    addResource(resource, key) {
        if (! this[key]) {
            this[key] = new Service();
        }
        this[key].addRoute('index', resource.index());
        this[key].addRoute('indexMany', resource.indexMany());
        this[key].addRoute('store', resource.store());
        this[key].addRoute('storeMany', resource.storeMany());
        this[key].addRoute('update', resource.update());
        this[key].addRoute('updateMany', resource.updateMany());
        this[key].addRoute('destroy', resource.destroy());
        this[key].addRoute('destroyMany', resource.destroyMany());
    }

}
