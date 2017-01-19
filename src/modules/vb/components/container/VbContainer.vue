<template lang="html">
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        centered: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes() {
            return {
                'container': true,
                'has-text-centered': this.centered
            }
        }
    }
}
</script>

<style lang="css">
</style>
