import * as types from './types';
import {allTags} from './allTags';
import {tagRepository} from './tagRepository';

export const getters = {
    [types.ALL_ARTICLES]: allTags,
    [types.TAG_REPOSITORY]: tagRepository,

}
