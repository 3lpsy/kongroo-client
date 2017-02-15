import * as Guards from 'router/guards';
import LoginIndexPage from 'pages/auth/login/index/Index.vue';

import CredentialIndexPage from 'pages/auth/login/credential/index/Index.vue';
import SMSIndexPage from 'pages/auth/login/sms/index/Index.vue';
import EmailIndexPage from 'pages/auth/login/email/index/Index.vue';
import AuthenticateIndexPage from 'pages/auth/login/authenticate/index/Index.vue';

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
    },
    credential: {
        index: {
            path: "/auth/login/credential",
            name: "auth.login.credential.index",
            component: CredentialIndexPage,
            beforeEnter: Guards.check([
            ]),
            beforeRouteLeave: (route, redirect, next) => {
                next();
            },
            meta: {
                canReuse: false
            }
        }
    },
    sms: {
        index: {
            path: "/auth/login/sms",
            name: "auth.login.sms.index",
            component: SMSIndexPage,
            beforeEnter: Guards.check([
            ]),
            beforeRouteLeave: (route, redirect, next) => {
                next();
            },
            meta: {
                canReuse: false
            }
        }
    },
    email: {
        index: {
            path: "/auth/login/email",
            name: "auth.login.email.index",
            component: EmailIndexPage,
            beforeEnter: Guards.check([
            ]),
            beforeRouteLeave: (route, redirect, next) => {
                next();
            },
            meta: {
                canReuse: false
            }
        }
    },
    authenticate: {
        index: {
            path: "/auth/login/authenticate",
            name: "auth.login.authenticate.index",
            component: AuthenticateIndexPage,
            beforeEnter: Guards.check([
                Guards.canAuthenticate(),
            ]),
            beforeRouteLeave: (route, redirect, next) => {
                next();
            },
            meta: {
                canReuse: false
            }
        }
    }
}
