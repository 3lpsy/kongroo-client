import Service from './service';

export default class Api {

    addResource(resource, key) {
        this.requiresService(key);
        this.addRoutes(resource, key)
    }

    addRoutes(resource, key) {
        let service = this.getService(key);
        service.addRoute('index', resource.index());
        service.addRoute('store', resource.store());
        service.addRoute('update', resource.update());
        service.addRoute('destroy', resource.destroy());
        this.setService(key, service);
    }

    getService(key) {
        return key.split(".").reduce((service, key, index) => {
            if (index === 0) {
                return this[key];
            }
            return service[key];
        }, {});
    }

    setService(key, service) {
        this.getKeys(key).reduce((child, key, index, keys) => {
            if (index === 0) {
                return {service: this.getService(key), key};
            } else if (index !== keys.length - 1){
                let revIndex = keys.length - 2 - index;
                let revRemaining = keys.length - revIndex;
                let fullKey = keys.reverse().splice(revIndex, revRemaining).join(".");
                let service = this.getService(fullKey);
                service[child.key] = child.service;
                return {service, key};
            } else {
                this[key] = child.service;
            }
        }, {});
    }

    requiresService(key) {
        console.log("requiresService");
        if (! this.hasService(key)) {
            if (this.isNested(key)) {
                this.addNestedService(key);
            } else {
                this.addService(key)
            }
        }
    }

    hasService(key, service = false) {
        console.log("hasService", key, service);
        if (service) {
            return !! service[key];
        }

        if (this.isNested(key)) {
            return this.hasNestedService(key);
        }
        return !! this[key];
    }

    addService(key, service) {
        if (service) {
            this[key] = service;
            return true;
        }
        this[key] = new Service();
    }

    isNested(key) {
        return key.split(".").length > 1;
    }

    hasNestedService(key) {
        console.log("hasNestedService");

        let keys = key.split('.');

        return !! keys.reduce((payload, key, index, keys) => {
            console.log(keys);
            console.log(payload);
            console.log(key);
            if (index === 0) {
                let payload = {};
                payload.exists = this.hasService(key);
                payload.parent = this[key];
                payload.key = key;
                return payload;
            } else if (payload.exists === true && payload.parent) {
                let payload = {};
                payload.exists = this.hasService(key, payload.parent);
                payload.parent = payload[key];
                payload.key = key;
                return payload;
            } else {
                return {exists: false}
            }

        }, {}).exists;
    }

    addNestedService(key) {
        console.log("addNestedService");
        this.getKeys(key, true).reduce((child, key, index, keys) => {
            console.log("SHOULD BE ARR")
            console.log(key, index);
            if (index === 0) {
                console.log("SHOULD BE SERIES");
                return {service: new Service(), key}
            } else if (index !== keys.length - 1){
                let revIndex = this.getKeys(key, true).indexOf(rKey => {
                    return rKey === key;
                });
                let revRemaining = keys.length - (revIndex + 1);
                let fullKey = this.getKeys(key, true).splice(revIndex, revRemaining).join(".");
                let service = {};
                console.log("CHECIKING HAS", fullKey);
                if (! this.hasService(fullKey)) {
                    console.log("NEW NESTED", fullKey);
                    service = new Service();
                } else {
                    console.log("GET NESTED", fullKey);
                    service = this.getService(fullKey);
                }
                service[child.key] = child.service;
                return {service, key};
            } else {
                this[key] = child.service;
                return this[key];
            }
        });
    }

    getKeys(key, reversed = false) {
        let keys = key.split(".");
        let clone = keys.map(key => key);
        if (reversed) {
            clone = keys.reverse();
        }
        return clone;
    }
}
