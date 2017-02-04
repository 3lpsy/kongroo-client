import FilterManager from "filters/manager";

const manager = new FilterManager();

import tagged from "article/filters"

manager.add(tagged)

export default manager;
