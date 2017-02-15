<template>
    <page-container>
        <section class="hero is-fullheight is-dark is-bold">
            <app-messages></app-messages>
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <credential-form class="column is-4 is-offset-4">
                        </credential-form>
                    </div>
                </div>
            </div>
        </section>

    </page-container>
</template>

<script>

import PageContainer from 'pages/auth/login/container/Container.vue';
import AppMessages from 'message/components/message/AppMessages.vue';
import CredentialForm from 'auth/components/forms/login/CredentialForm.vue';

export default {
    data() {
        return {
            booted: false
        };
    },
    components: {
        PageContainer,
        AppMessages,
        CredentialForm
    }
};
</script>

<style type="text/css">

</style>
