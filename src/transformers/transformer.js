
import filterUnique from "../utils/filters/filterUnique";

export default class Transformer {

    static getCollection (items) {
        const newCollection = [];

        items.forEach((item) => {
            newCollection.push(this.get(item));
        });

        return newCollection;
    }

    static sendCollection (items) {
        const newCollection = [];

        items.forEach((item) => {
            newCollection.push(this.send(item));
        });

        return newCollection;
    }

    static filterUnique (items, filter, prop) {
        return filterUnique(items, filter, prop);
    }
}
