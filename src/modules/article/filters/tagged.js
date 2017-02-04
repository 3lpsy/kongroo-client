import Filter from "filters/filter"

class TaggedFilter extends Filter {

    constructor(tagIds, all = true) {
        this.tagIds = tagIds;
        this.all = all;
    }

    handler(item, index, data) {
        return this.tagIds.reduce((carry, tagId, index) => {
            if (index === 0) {
                carry = true;
            }
            return item.tagIds.includes(tagId) && carry;
        }, false);
    }
}
