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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="z-10"
        ><v-icon>mdi-menu</v-icon></v-app-bar-nav-icon
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
            v-for="tabItem in setTab()"
            :key="tabItem.id"
          >
            <NuxtLink v-scroll-to="`#${tabItem.linkto}`" to
              >{{ tabItem.title }}
            </NuxtLink>
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
  methods: {
    setTab() {
      if (this.$nuxt.$route.name == 'index' & !this.$vuetify.breakpoint.md & !this.$vuetify.breakpoint.lg & !this.$vuetify.breakpoint.xl) {
        return this.tabItems
      } else {
        return this.tabItemsForPages
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
      ],
      tabItemsForPages: [
        { title: "Top", id: 1, linkto: "top" },
        { title: "Bottom", id: 1, linkto: "bottom" }
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
