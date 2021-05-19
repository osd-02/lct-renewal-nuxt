<template>
    <div>
        <v-navigation-drawer v-model="drawer" fixed color="accent">
            <ul>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
                <li>aaa</li>
            </ul>
        </v-navigation-drawer>
        <v-app-bar app class="header" color="main" fixed flat>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>lct-renewal</v-toolbar-title>
            <template v-slot:extension>
                <v-tabs id="makeTab" background-color="sub">
                    <v-tab>New post</v-tab>
                    <v-tab>Articles</v-tab>
                    <v-tab>Review</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>
    </div>
</template>


<script>
export default {
    data() {
        return {
            drawer: null
        }
    }
}
</script>

<style lang="scss">
    .header {
        display: fixed;
    }
</style>