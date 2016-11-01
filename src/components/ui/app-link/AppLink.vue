<template>
    <span>
        <a :href="href" @click.capture.prevent="go">
            <slot name="link"></slot>
        </a>
    </span>
</template>

<script>
import {cleanPath} from "../../../router/util/path";
import {normalizeLocation} from "../../../router/util/location";

export default {
    props: {
        rRoute: {
            type: String,
        },
        rParams: {
            required: true
        },
        rQuery: {
        },
        queryOnly: {
            default: false
        }
    },
    computed: {
        href() {
            const router = this.$router
            const current = this.$route
            const to = normalizeLocation(this.to, current, this.append);
            const resolved = router.match(to)
            const fullPath = resolved.redirectedFrom || resolved.fullPath
            const base = router.history.base
            const href = "/#" + (base ? cleanPath(base + fullPath) : fullPath);
            return href;
        },
        to() {
            return {
                name: this.rRoute,
                params: this.rParams,
                query: this.rQuery
            }
        }
    },
    methods: {
        go: function(e) {
            e.preventDefault();
            if (!this.queryOnly) {
                return this.push();
            }
            return this.pushQuery();
        },
        push: function() {
            this.$router.push(this.to);
        },
        pushQuery: function() {
            this.$router.push({query: this.to.query});
        }
    }
}
</script>

<style>

</style>
