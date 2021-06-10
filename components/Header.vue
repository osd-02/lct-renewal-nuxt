<template>
  <div>
    <Drawer v-model="drawer" />
    <v-app-bar app class="header" color="main" fixed flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>lct-renewal</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs id="makeTab" background-color="sub">
          <v-tab v-for="tabItem in tabItems" :key="tabItem.id">
            {{ tabItem.title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import Drawer from "./Drawer.vue";

export default {
  components: {
    Drawer
  },
  data() {
    return {
      drawer: null,
      tabItems: [
        { title: "News", id: 1 },
        { title: "Articles", id: 2 },
        { title: "info", id: 3 },
        { title: "profile", id: 4 }
      ]
    };
  }
};
</script>

<style lang="scss">
.header {
  display: fixed;
}
</style>
