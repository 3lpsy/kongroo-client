import VbContainer      from './container/VbContainer.vue';
import VbColumns        from './columns/VbColumns.vue';
import VbColumn         from './columns/VbColumn.vue';
import VbHero           from './hero/VbHero.vue';
import VbHeroBody       from './hero/VbHeroBody.vue';
import VbHeroFoot       from './hero/VbHeroFoot.vue';
import VbHeroHead       from './hero/VbHeroHead.vue';
import VbHeroTitle      from './hero/VbHeroTitle.vue';
import VbTabs           from './tabs/VbTabs.vue';
import VbTab            from './tabs/VbTab.vue';

const options = {
    VbContainer,
    VbColumns,
    VbColumn,
    VbHero,
    VbHeroBody,
    VbHeroFoot,
    VbHeroHead,
    VbHeroTitle,
    VbTabs,
    VbTab
};

options.install = (Vue) => {
    for (let component in options) {
        let tagName = component.split(/(?=[A-Z])/).map((name) => {
            return name.toLowerCase();
        }).join("-");
        Vue.component(tagName, options[component]);
    }
};

window.VueMaterial = options;

export default options;
