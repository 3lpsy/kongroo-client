import * as types from "./types";
import {getPaginatedAuthors} from './getPaginatedAuthors';
import {getAuthor} from './getAuthor';

export const actions = {
    [types.GET_PAGINATED_ARTICLES]: getPaginatedAuthors,
    [types.GET_ARTICLE]: getAuthor

}
