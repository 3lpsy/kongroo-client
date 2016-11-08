import * as types from "./types";
import {appendTagRepositorySuccess} from "./appendTagRepositorySuccess";
import {setAllTagsSuccess} from "./setAllTagsSuccess";
import {setAllTagsFailure} from "./setAllTagsFailure";

export const mutations = {
    [types.SET_ALL_TAGS_SUCCESS]: setAllTagsSuccess,
    [types.SET_ALL_TAGS_FAILURE]: setAllTagsFailure,
    [types.APPEND_TAG_REPOSITORY_SUCCESS]: appendTagRepositorySuccess,
};
