<template>
  <v-sheet id="wrapper">
    <v-sheet width="100%" min-height="100vh" id="home-location">
      <Profile id="profile-location" />
    </v-sheet>
  </v-sheet>
</template>

<script lang="js">
import Vue from "vue";
import Drawer from "~/components/Drawer.vue";

export default Vue.extend({
    head() {
    return {
      title: 'profile'
    }
  }
});
</script>

<style lang="scss" scoped>
$header-height: 106px;
</style>