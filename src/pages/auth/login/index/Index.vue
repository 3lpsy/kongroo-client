<template>
    <page-container>
        <section class="hero is-fullheight is-dark is-bold">
            <app-messages></app-messages>
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <login-form class="column is-4 is-offset-4">
                        </login-form>
                    </div>
                </div>
            </div>
        </section>

    </page-container>
</template>

<script>

import PageContainer from 'pages/auth/login/container/Container.vue';
import AppMessages from 'message/components/message/AppMessages.vue';
import LoginForm from 'auth/components/forms/login/LoginForm.vue';

export default {
    data() {
        return {
            booted: false
        };
    },
    components: {
        PageContainer,
        AppMessages,
        LoginForm
    }
};
</script>

<style type="text/css">

</style>
