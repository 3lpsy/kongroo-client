/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */

import homeIndex from "./home/index";
import articleIndex from "./article/index";
import articleShow from "./article/show";

export default [
    homeIndex(),
    articleIndex(),
    articleShow()
];
