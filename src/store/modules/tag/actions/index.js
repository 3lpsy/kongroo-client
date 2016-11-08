import * as types from "./types";
import {getAllTags} from './getAllTags';
import {getTag} from './getTag';

export const actions = {
    [types.GET_ALL_TAGS]: getAllTags,
    [types.GET_TAG]: getTag
}
