<template>
    <page-container>
        <section class="hero is-fullheight is-dark is-bold">
            <app-messages></app-messages>
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-4 is-offset-4">
                            <h1 class="title">
                                SMS
                            </h1>
                            <div class="box">
                                <div class="content has-text-centered">
                                    <h5>Please check your mobile device for a confirmation code.</h5>
                                </div>
                                <p class="control">
                                    <input v-model="code" class="input" type="password" placeholder="Code">
                                </p>
                                 <p class="control">
                                    <router-link class="button is-default" :to="{name: 'article.index'}">
                                        Cancel
                                    </router-link>
                                    <!-- <span></span> -->
                                   <button class="button is-primary is-pulled-right" @click="attemptSmsCode">
                                       Next
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
import AppMessages from 'message/components/message/AppMessages.vue';

export default {
    data() {
        return {
            booted: false,
            code: null
        };
    },
    methods: {
        attemptSmsCode() {
            this.$store.dispatch('auth/actions/attemptSmsCode', {code: this.code})
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
