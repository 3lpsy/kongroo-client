import loader from "./../../../utils/loader";

const beforeEnter = (route, redirect, next) => {
    next()
}

const articleShow = () => {
    return {
        path: "/articles/:articleId",
        name: "article.show",
        component: loader.page("article", "show"),
        beforeEnter: beforeEnter

    }
}

export default articleShow;
