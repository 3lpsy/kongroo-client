<template>
    <page-container>
        <section class="hero is-fullheight is-dark is-bold">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-4 is-offset-4">
                           <h1 class="title">
                               Login
                            </h1>
                            <div class="box">
                                <label class="label">Email</label>
                                <p class="control">
                                    <input class="input" v-model="creds.email" type="text" placeholder="jsmith@example.org">
                                </p>
                                <label class="label">Password</label>
                                <p class="control">
                                    <input v-model="creds.passowrd" class="input" type="password" placeholder="●●●●●●●">
                                </p>
                                <div class="notification is-danger" v-if="errors && errors.length > 0">
                                    <button class="delete"></button>
                                    <ul>
                                        <li v-for="error in errors">
                                            - {{error.message}}
                                        </li>
                                    </ul>
                                </div>
                                <hr>
                                <p class="control">
                                  <button class="button is-primary" @click="attemptLogin">
                                      Login
                                  </button>
                                  <button class="button is-default" @click="goBack">
                                      Cancel
                                  </button>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </page-container>
</template>

<script>

import PageContainer from 'pages/auth/login/container/Container.vue';
import api from 'api';
export default {
    data() {
        return {
            booted: false,
            errors: [],
            creds: {

            }
        };
    },

    methods: {
        attemptLogin(){
            api.service('auth.login').store({
                data: {
                    email: this.email,
                    password: this.password
                }
            }).then((response) => {
                let token = response.data.token;
                this.localStorage.set("auth_token", token);
            }).catch((error) => {
                console.log('error');
                throw error;
            });

        },
        goBack() {
            this.$router.push({name: 'article.index'});
        }
    },

    computed: {

    },
    components: {
        PageContainer,
    }
};
</script>

<style type="text/css">

</style>
