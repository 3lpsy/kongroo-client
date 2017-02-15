const types = {
    startAuth: 'auth/actions/startAuth',
    nextAuth: 'auth/actions/nextAuth',
    attemptCredentials: 'auth/actions/attemptCredentials',
    attemptEmailCode: 'auth/actions/attemptEmailCode',
    attemptSmsCode: 'auth/actions/attemptSmsCode',
    attemptAuthenticate: 'auth/actions/attemptAuthenticate',
}
export {types};

import api from 'api';
import * as constants from 'constants';
export default  {

    [types.startAuth]: (context, payload) => {
        return new Promise((resolve, reject) => {
            api.service('auth.login.start').store({
                data: {
                    email: payload.email,
                }
            }).then((response) => {
                // clear all auth localStorage
                if (response && response.status === 200) {
                    let token = handleTokenResponse(response, context);
                    let factor = getNextRequiredFactorRoute(token);
                    navigateToFactor(factor);
                    resolve();
                }
                reject(new Error('StartAuth Error'));

            }).catch((error) => {
                // clear all auth localStorage
                setErrorsFromError(error, context);
                throw error;
            });
        })
    },

    [types.attemptCredentials]: (context, payload ) => {
        return new Promise((resolve, reject) => {
            api.service('auth.login.password').store({
                data: {
                    email: payload.email,
                    password: payload.password
                }
            }).then((response) => {
                if (response && response.status === 200) {
                    if (response.data && response.data.token) {
                        let token = handleTokenResponse(response, context);
                        let factor = getNextRequiredFactorRoute(token);
                        navigateToFactor(factor);
                        resolve();
                    }
                }
                reject(new Error('AttemptCredentials Error'));

            }).catch((error) => {
                setErrorsFromError(error, context);
                throw error;
            });
        })
    },
    [types.attemptEmailCode]: (context, payload ) => {
        return new Promise((resolve, reject) => {
            api.service('auth.login.email').store({
                data: {
                    code: payload.code
                }
            }).then((response) => {
                if (response && response.status === 200) {
                    if (response.data && response.data.token) {
                        let token = handleTokenResponse(response, context);
                        let factor = getNextRequiredFactorRoute(token);
                        navigateToFactor(factor);
                        resolve();
                    }
                }
                reject(new Error('AttemptEmailCode Error'));

            }).catch((error) => {
                setErrorsFromError(error, context);
                throw error;
            });
        })
    },
    [types.attemptSmsCode]: (context, payload ) => {
        return new Promise((resolve, reject) => {
            api.service('auth.login.sms').store({
                data: {
                    code: payload.code
                }
            }).then((response) => {
                if (response && response.status === 200) {
                    if (response.data && response.data.token) {
                        let token = handleTokenResponse(response, context);
                        let factor = getNextRequiredFactorRoute(token);
                        navigateToFactor(factor);
                        resolve();
                    }
                }
                reject(new Error('AttemptEmailCode Error'));

            }).catch((error) => {
                setErrorsFromError(error, context);
                throw error;
            });
        })
    },

    [types.attemptAuthenticate]: (context, payload ) => {
        return new Promise((resolve, reject) => {
            api.service('auth.login.authenticate').store().then((response) => {
                if (response && response.status === 200) {
                    if (response.data && response.data.token) {
                        let token = handleTokenResponse(response, context);
                        let decoded = getDecodedToken(token);
                        if (decoded.authenticated) {
                            console.log(constants.ADMIN_PROTOCOL + constants.ADMIN_ROOT);
                            window.location = constants.ADMIN_PROTOCOL + constants.ADMIN_ROOT
                        }
                        resolve();
                    }
                }
                reject(new Error('AttemptEmailCode Error'));

            }).catch((error) => {
                setErrorsFromError(error, context);
                throw error;
            });
        })
    },
}

const handleTokenResponse = (response, context) => {
    let token = response.data.token;

    if (window.localStorage.getItem('token')) {
        window.localStorage.setItem('token', []);
    }

    window.localStorage.setItem('token', token);

    setMessagesFromResponse(response, context);

    return token;
}

import router from 'router';

const navigateToFactor = (name) => {
    let routes = {
        credential: 'auth.login.credential.index',
        email: 'auth.login.email.index',
        sms: 'auth.login.sms.index'
    }
    let route = routes[name];
    if (route) {
        router.push({name: route});
    } else {
        router.push({name: 'auth.login.authenticate.index'});
    }
}

const getNextRequiredFactorRoute = (token) => {

    getDecodedToken(token);
    let decoded = jwtDecode(token);
    console.log(decoded);

    return decoded.factors.find((factor) => {
        return ! decoded.verified.includes(factor);
    });
}

import jwtDecode from 'jwt-decode';


const getDecodedToken = (token) => {
    return jwtDecode(token);
}


const setMessagesFromResponse = (response, context) => {

    let data = response.data;

    if (data && data.meta && data.meta.messages ) {
        let messages = data.meta.messages;
        context.dispatch('message/actions/setMessages', {messages}).then(() => {

        }).catch(() => {

        })
    }
}

const setErrorsFromError = (error, context) => {
    let response = error.response;

    if (! response) {
        throw error;
    }

    if (response.status === 401) {
        let data = response.data;

        if (data.meta && data.meta.errors) {

            let errors = data.meta.errors;

            context.dispatch('error/actions/setErrors', {errors}).then(() => {

            }).catch(() => {

            })
        }
    }
}
