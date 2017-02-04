<template lang="html">
    <div>
        <transition-group appear name="slide-fade" mode="out-in">
            <aside class="menu" v-if="items" key="tag-side-menu-list">
              <p class="menu-label">
                Tags
              </p>
              <ul class="menu-list">
                <li v-for="tag in items" :key="tag.id">
                    <router-link :to="{name: 'article.index', query: { 'tags[]': tag.id}}">
                        {{tag.name}}
                    </router-link>
                </li>
                <li v-if="hasMore">
                    <a href="#" @click.prevent="showMore">more</a>
                </li>
              </ul>
            </aside>
        </transition-group>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showLimit: 5
        }
    },
    methods: {
        showMore(){
            this.showLimit = this.showLimit + 5;
        }
    },
    computed: {
        hasMore() {
            if (! this.tags) {
                return false;
            }
            return this.tags.length > this.showLimit;
        },
        tags() {
            return this.$store.getters['tag/getters/tags'];
        },
        items() {
            if (! this.tags) {
                return [];
            }

            let count = 0;

            return this.tags.map((tag) => {
                count = count + 1;
                if (count <= this.showLimit) {
                    return tag;
                }
                return false;
            }).filter(tag => !! tag);
        }
    }
}
</script>

<style lang="css">
</style>
