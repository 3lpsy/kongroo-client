<template lang="html">
    <li :class="classes">
        <slot></slot>
    </li>
</template>

<script>
export default {
    props: {
        active: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes() {
            return {
                'is-active': this.active
            }
        }
    }
}
</script>

<style lang="css">
</style>
