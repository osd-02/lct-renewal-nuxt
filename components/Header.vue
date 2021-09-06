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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"
        ><v-icon>mdi-select-all</v-icon></v-app-bar-nav-icon
      >
      <v-app-bar-title>
        <div class="title">
          <NuxtLink to="/">
            Lo culture
          </NuxtLink>
        </div>
      </v-app-bar-title>
      <template v-slot:extension>
        <v-tabs background-color="sub" fixed-tabs>
          <v-tab
            class="tabs font-Spaciouo"
            v-for="tabItem in tabItems"
            :key="tabItem.id"
          >
            <nuxt-link v-scroll-to="`#${tabItem.linkto}`" to
              >{{ tabItem.title }}
            </nuxt-link>
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
        { title: "Home", id: 1, linkto: "home-location" },
        { title: "News", id: 2, linkto: "news-location" },
        { title: "Works", id: 3, linkto: "works-location" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  .title {
    width: 70vw;
    font-family: "Infinity" !important;
    font-size: 2rem !important;
    vertical-align: middle;
    font-weight: 500;
  }
  .tabs {
    text-transform: none;
    width: 5vw;
    font-size: 1rem;
  }
}
</style>
