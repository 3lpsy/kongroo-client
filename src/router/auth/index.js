import LoginIndexPage from 'pages/auth/login/index/Index.vue';

export const login = {
    index: {
        path: "/auth/login",
        name: "auth.login.index",
        component: LoginIndexPage,
        beforeEnter: (route, redirect, next) => {
            next();
        },
        beforeRouteLeave: (route, redirect, next) => {
            next();
        },
        meta: {
            canReuse: false
        }
    }
}
