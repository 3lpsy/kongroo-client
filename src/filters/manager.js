export default class FilterManager {
    constructor() {
        this.filters = [];
    }

    add(name, filter) {
        this.filters.push(filter);
    }

    all() {
        return this.filters;
    }

    get(names) {
        if (! Array.isArray(names)) {
            return this.filter(names);
        }
        return this.filters.filter((filter) => {
            return names.includes(filter.name);
        });
    }

    filter(name) {
        return this.filters.first((filter) => {
            return filter.name === name;
        })
    }
}
