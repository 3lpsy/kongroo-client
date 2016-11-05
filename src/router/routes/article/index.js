import loader from "./../../../utils/loader";

const beforeEnter = (route, redirect, next) => {
    console.log("beforeEnter");
    next();
}

const beforeRouteLeave = (route, redirect, next) => {
    console.log("beforeRouteLeave");
    next();
}

const articleIndex = () => {
    return {
        path: "/articles",
        name: "article.index",
        component: loader.page('article', 'index'),
        beforeEnter: beforeEnter,
        beforeRouteLeave: beforeRouteLeave,
        meta: {
            canReuse: false
        }
    }
}

export default articleIndex;
