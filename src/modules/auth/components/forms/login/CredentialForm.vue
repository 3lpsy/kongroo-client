<template lang="html">
    <div class="">
        <h1 class="title">
            Login
        </h1>
        <div class="box">
             <label class="label">
                 Email
             </label>
             <p class="control">
                 <input class="input" v-model="creds.email" type="text" placeholder="jsmith@example.org">
             </p>
             <label class="label">
                 Password
             </label>
             <p class="control">
                 <input v-model="creds.password" class="input" type="password" placeholder="●●●●●●●">
             </p>
             <errors :errors="authErrors" v-if="hasAuthErrors"></errors>
             <hr>
             <p class="control">
                <router-link class="button is-default" :to="{name: 'article.index'}">
                     Go Back
                </router-link>
                <!-- <span></span> -->
               <button class="button is-primary is-pulled-right" @click="attemptLogin">
                   Login
               </button>
             </p>
        </div>
    </div>

</template>

<script>
import Errors from "error/components/error/Errors";

export default {
    data() {
        return {
            creds: {
                email: 'admin@example.com',
                password: 'secret'
            }
        }
    },
    methods: {
        attemptLogin() {
            this.$store.dispatch('auth/actions/attemptCredentials', {email: this.creds.email, password: this.creds.password}).then(() => {

            }).catch(() => {

            });
        }
    },
    computed: {
        hasAuthErrors() {
            return this.authErrors.length > 0;
        },
        authErrors() {
            if (! this.errors) {
                return [];
            }
            return this.errors.filter((err) => {
                return err.bag === 'auth';
            })
        },
        errors() {
            return this.$store.getters['error/getters/errors']
        }
    },
    components: {
        Errors
    }
}
</script>

<style lang="css">
</style>
