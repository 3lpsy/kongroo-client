/* ============
 * Loader Util
 * ============
 *
 * Loader util to prevent relative directory hell
 */

import {folder2FileName as parse} from "./../helpers/folder2FileName";

import {cap} from "./../helpers/cap";

export default {

    container() {
        return require("./../layouts/container/Container.vue");
    },

    layout(layout) {
        return require(`./../layouts/${layout}/${cap(layout)}.vue`);
    },

    page (main, page) {
        return require(`./../pages/${main}/${page}/${cap(page)}.vue`);
    },

    nestedPage (main, second, page) {
        return require(`./../pages/${main}/${second}/${page}/${cap(page)}.vue`);
    },

    component (main, folder, component = null) {
        if (!component) {
            component = parse(folder);
        } else {
            component = parse(component);
        }
        return require(`./../components/${main}/${folder}/${component}.vue`);
    },

    bulma (main, folder, component = null) {
        if (!component) {
            component = parse(folder);
        } else {
            component = parse(component);
        }
        return require(`./../bulma/${main}/${folder}/${component}.vue`);
    },

    ui (folder, component = null) {
        if (!component) {
            component = parse(folder);
        } else {
            component = parse(component);
        }
        return require(`./../components/ui/${folder}/${parse(folder)}.vue`);
    },

    link() {
        return require(`./../components/ui/app-link/AppLink.vue`);
    },

    spinner(name) {
        return require(`./../components/ui/spinners/${cap(name)}Spinner.vue`);
    },

    transfomer (name) {
        return require(`./../transformers/${name}/index.js`);
    },

    provider (name) {
        return require(`./../${name}/index.js`).default;
    },
    api() {
        return require(`./../api/index`);
    },


    helper (name) {
        return require(`./../helpers/${name}.js`);
    }

};
