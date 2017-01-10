<template>
    <section class="hero is-primary">
        <div class="hero-head">
            <div class="container">
                <nav class="nav">
                    <div class="nav-left">
                        <a class="title nav-item is-brand is-active" href="/">
                            Sun
                        </a>
                    </div>

                    <bulma-nav-menu>
                        <a class="nav-item" href="/">
                          Series
                        </a>
                        <a class="nav-item" href="/documentation/overview/start/">
                          Tags
                        </a>
                        <span class="nav-item">
                            <a class="nav-item" href="https://twitter.com/jgthms">
                                <span class="icon">
                                    <i class="fa fa-twitter"></i>
                                </span>
                            </a>
                            <a class="" href="https://github.com/jgthms/bulma">
                                <span class="icon">
                                    <i class="fa fa-github"></i>
                                </span>
                            </a>
                        </span>
                    </bulma-nav-menu>
                </nav>
            </div>
        </div>
    </section>
</template>

<script>
    import loader from "../../utils/loader";

    export default {
        ready() {
        },
        methods: {

        },
        components: {
            BulmaNavMenu: loader.bulma('nav', 'nav-menu'),
        }
    };
</script>

<style type="text/css">

</style>