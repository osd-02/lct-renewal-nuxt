<template>
  <div>
    <Drawer v-model="drawer" />
    <v-app-bar app class="header" color="main" fixed flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <img src="../assets/img/logo.png" id="logo-image" />
      <template v-slot:extension>
        <v-tabs background-color="sub" v-model="tab" align-with-title>
          <v-tab class="tabs" v-for="tabItem in tabItems" :key="tabItem.id">
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
        { title: "Home", id: 1 },
        { title: "News", id: 2 },
        { title: "Articles", id: 3 },
        { title: "Profile", id: 4 },
        { title: "Info", id: 5 }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  #logo-image {
    height: 20px;
    .tabs {
      text-transform: none;
      width: 5vw;
    }
  }
}
</style>
