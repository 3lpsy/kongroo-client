const types = {
    attemptLogin: 'auth/actions/attemptLogin',
}
export {types};

import api from 'api';

export default  {
    [types.attemptLogin]: (context, payload ) => {
        return new Promise((resolve, reject) => {
            api.service('auth.login').store({
                data: {
                    email: payload.email,
                    password: payload.password
                }
            }).then((response) => {
                if (response && response.status === 200) {
                    let data = response.data;

                    if (data && data.meta && data.meta.messages ) {
                        let messages = data.meta.messages;
                        console.log(messages);
                        context.dispatch('message/actions/setMessages', {messages}).then(() => {

                        }).catch(() => {

                        })
                    }
                    resolve();
                }
            }).catch((error) => {
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
                throw error;
            });
        })
    }
}
