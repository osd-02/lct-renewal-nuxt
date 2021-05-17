<template>
    <div>aaa</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data () {
        return {
            drawer: false
        }
    },
    methods: {
        open() {
            this.drawer = true
        },
        close () {
            this.drawer = false
        }
    }
})
</script>