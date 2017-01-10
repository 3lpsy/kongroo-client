<template>
<div>
    <span id="nav-toggle" :class="{'nav-toggle':true, 'is-active': collapsed}" @click="toggle">
        <span></span>
        <span></span>
        <span></span>
    </span>

    <div id="nav-menu" :class="{'nav-right': true, 'nav-menu': true, 'is-active': collapsed}">
        <slot></slot>
    </div>
</div>

</template>

<script>

export default {
    data() {
        return {
            collapsed: false
        }
    },
    methods: {

        toggle() {
            this.collapsed = !this.collapsed;
        }
    }

}

</script>

<style>

</style>
