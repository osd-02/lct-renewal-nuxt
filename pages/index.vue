<template>
  <div id="wrapper">
    <h1>Lct renewal Nuxt.js</h1>
  </div>
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
  display: flex;
  min-height: 100vh;
  padding: 0;
  width: 100%;
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
