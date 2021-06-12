<template>
  <div>
      <Drawer v-model="drawer" />
      <v-app-bar class="header" color="main" elevate-on-scroll hide-on-scroll height="70px" extension-height="45px" app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>
          Lo - culture
        </v-app-bar-title>
        <template v-slot:extension>
          <v-tabs background-color="sub" fixed-tabs>
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
  computed: {
    tabShow() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false;
        default:
          return true;
      }
    }
  },
  components: {
    Drawer
  },
  data() {
    return {
      drawer: null,
      tabItems: [
        { title: "Home", id: 1 },
        { title: "Articles", id: 2 },
        { title: "News", id: 3 },
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
