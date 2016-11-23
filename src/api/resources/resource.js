class Resource {

    get(routeParams = [], options = {}) {
        // if there is only one argument, set routeParams to false
        // and set options to routeParams.
        // should only happen if api template is route root.

        const route = this.formatRoute(this.route, routeParams)

        options.params = this.formatQueryParams(options.params);

        return this.axios.get(route, options)

    }

    // params is object
    formatRoute(route, params = {}) {

        // grab all 
        Object.keys(params).reduce((key) => {
            if (! this.isAvailableRouteParam(key)) {
                return route;
            }
            else {
                consol.log("Route Param " + $key + "Not ALlowed");
            }
            console.log(this.replaceRouteParam(route, key, params[key]));
            return this.replaceRouteParam(route, key, params[key]);
        }, route);

        // remove unsubbed params

        // trim trailing slash

        return route;
    }

    replaceRouteParam(route, key, value) {
        return route.replace(":" + key, value);
    }

    isAvailableRouteParam(routeKey) {
        return this.routeParams.findIndex( (available) => {
            return available === routeKey;
        }) !== -1;
    }

    // params is object
    formatQueryParams(params) {
        // check for array conversion
        if (params && Object.keys(params) > 0) {
            Object.keys(params).map((key) => {
                // remove param if not available
                if (! this.isAvailableQueryParam(key)) {
                    delete params[key];
                }

                if (this.shouldForceArray(key)) {
                    params[key] = this.forceArray(params[key]);
                }
            })
        }

        return params;
    }

    isAvailableQueryParam(paramKey) {
        return this.queryParams.findIndex( (available) => {
            return available === paramKey;
        }) !== -1;
    }

    forceArray(value) {
        if (! Array.isArray(value)) {
            return [value];
        }
        return value;

    }

    shouldForceArray(paramKey) {
        return this.forceArray.findIndex( (available) => {
            return available === paramKey;
        }) !== -1;
    }

}

export {Resource}
