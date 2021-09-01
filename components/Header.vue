<template>
  <div class="wrapper">
    <Drawer v-model="drawer" />
    <v-app-bar
      class="header"
      color="main"
      elevate-on-scroll
      hide-on-scroll
      height="70px"
      extension-height="45px"
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="title">
        <h5>
          Lo   culture
        </h5>
      </v-app-bar-title>
      <template v-slot:extension>
        <v-tabs background-color="sub" fixed-tabs>
          <v-tab class="tabs" v-for="tabItem in tabItems" :key="tabItem.id">
            <nuxt-link v-scroll-to="`#${tabItem.linkto}`" to>{{ tabItem.title }} </nuxt-link>
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
        { title: "Home", id: 1 ,linkto: "home-location"},
        { title: "Articles", id: 2 ,linkto: "articles-location"},
        { title: "Profile", id: 3 ,linkto: "profile-location"}
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  .title {
    width: 70vw;
    h5 {
      font-family: "Espace";
    }
  }
  .tabs {
    text-transform: none;
    width: 5vw;
  }
}
</style>
