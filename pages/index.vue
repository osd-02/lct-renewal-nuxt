<template>
  <v-sheet id="wrapper">
    <v-sheet width="100%" min-height="130vh" color="secondary">
      <h2>lct-newal</h2>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import Drawer from "~/components/Drawer.vue";

export default Vue.extend({
  components: { Drawer }
});
</script>

<style lang="scss" scoped>
$header-height: 106px;

#wrapper {
  // min-height: 130vh;
  // width: 100%;
  // position: relative;
  // padding-top: 30vh;
  // top: -30vh;
  
  #header-space {
    height: $header-height;
    padding: 0;
  }
  #body {
    padding: 20px;
    // background-color: "sub";
  }
}
</style>
