import * as mutations from "./../mutations/types";

import * as api from "./../../../../api/index";
import transformer from "./../../../../transformers/tag";

const getAllTagsSuccess = (response, context) => {
    let tags = transformer.getCollection(response.data.tags)
    context.commit(mutations.SET_ALL_TAGS_SUCCESS, tags, response.data.meta);
    context.commit(mutations.APPEND_TAG_REPOSITORY_SUCCESS, tags);
    console.log('tag success');
}

const getAllTagsFailure = (response, store) => {

}

export const getAllTags = (context) => {

    return api.Tag.get()
        .then(response => getAllTagsSuccess(response, context))
        .catch(response => getAllTagsFailure(response, context));

};
