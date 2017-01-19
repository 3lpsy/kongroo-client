const types = {
    INSERT_TAG: 'tag/mutations/INSERT_TAG',
}

export {types};

import VuexError from "errors/VuexError";

export default {
    [types.INSERT_TAG]: (state, payload = {}) => {
        let insert = payload.tag;

        if (! insert) {
            throw new VuexError("No Tag to Insert.");
        }

        if (! state.repo) {
            throw new VuexError("No Repo to Insert To.");
        }

        if (! state.repo.tags) {
            throw new VuexError("No Repo Tags to Insert To.");
        }

        let exists = state.repo.tags.indexOf((tag) => {
            return tag.id === insert.id;
        }) !== -1;

        if (exists) {
            state.repo.tags = state.repo.tags.map((tag) => {
                if (tag.id === insert.id) {
                    return insert;
                }
                return tag;
            });
        } else {
            state.repo.tags.push(insert);
        }

    }
}
