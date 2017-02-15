<template>
    <page-container>
        <section class="hero is-fullheight is-dark is-bold">
            <app-messages></app-messages>
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-4 is-offset-4">
                            <h1 class="title">
                                Authenticate
                            </h1>
                            <div class="box">
                                 <p class="control">
                                    <!-- <span></span> -->
                                   <button class="button is-primary is-fullwidth" @click="attemptAuthenticate">
                                       Continue
                                   </button>
                                   <br>
                                   <router-link class="button is-default is-fullwidth" :to="{name: 'article.index'}">
                                       Cancel
                                   </router-link>
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
import AppMessages from 'message/components/message/AppMessages.vue';

export default {
    data() {
        return {
            booted: false,
            code: ''
        };
    },
    methods: {
        attemptAuthenticate() {
            this.$store.dispatch('auth/actions/attemptAuthenticate', {code: this.code})
        }
    },
    components: {
        PageContainer,
        AppMessages,
    }
};
</script>

<style type="text/css">

</style>
