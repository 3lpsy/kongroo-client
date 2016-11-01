import * as types from "./types";
import {getPaginatedSeries} from './getPaginatedSeries';
import {getSeries} from './getSeries';

export const actions = {
    [types.GET_PAGINATED_SERIES]: getPaginatedSeries,
    [types.GET_SERIES]: getSeries
}
