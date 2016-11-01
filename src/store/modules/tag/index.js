/* ============
 * Account Module
 * ============
 */

import { state } from "./state";
import {mutations} from "./mutations/index";
import * as actions from "./actions/index";
import * as getters from "./getters/index";

export default {
    actions,
    state,
    mutations,
    getters
};
