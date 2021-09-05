<template>
  <v-sheet id="wrapper">
    <v-sheet width="100%" min-height="100vh" id="home-location">
      <Carousel />
      <News id="news-location" />
      <!-- <Articles id="articles-location" /> -->
      <!-- <Profile id="profile-location" /> -->
      <Works id="works-location" />
    </v-sheet>
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
});
</script>

<style lang="scss" scoped>
$header-height: 106px;
</style>
