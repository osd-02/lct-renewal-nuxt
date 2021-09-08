<template>
  <v-sheet color="secondary" id="top">
    <v-sheet id="wrapper" color="secondary">
      <v-sheet width="100%" min-height="100vh" id="home-location" color="secondary">
        <v-container fluid class="p-0" v-if="this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl">
          <v-row no-gutters>
            <v-col cols="8">
              <Carousel />
              <Works id="works-location" />
            </v-col>
            <v-col cols="4">
              <News id="news-location" />
            </v-col>
          </v-row>
        </v-container>
        <v-sheet class="mobile-wrapper" color="secondary" v-if="this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm">
          <Carousel />
          <News id="news-location" />
          <Works id="works-location" />
        </v-sheet>
      </v-sheet>
    </v-sheet>
    <v-sheet id="bottom" />
  </v-sheet>
</template>

<script lang="js">
import Vue from "vue";
import Drawer from "~/components/Drawer.vue";
function formatTime (object, after) {
  for (const property in object) {
        object[property].publishDate = object[property].publishDate.slice(0, -6).replace(/-/g, after)
      }
}

export default Vue.extend({
  head() {
    return {
      title: 'home'
    }
  }
});
</script>

<style lang="scss" scoped>
$header-height: 106px;
#wrapper {
  max-width: 1100px;
  margin: auto;
}
.mobile-wrapper {
  max-width: 600px;
  margin: auto;
}
</style>
