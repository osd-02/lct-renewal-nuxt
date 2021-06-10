<template>
  <div id="wrapper">
    <div id="container">
      <div id="header-space" />
      <div id="body">
        <h1>Lct renewal Nuxt.js</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style lang="scss" scoped>
$header-height: 106px;

#container {
  min-height: 100vh;
  background-color: #b6dbec;
  padding: 0;
  width: 100%;
  #header-space {
    height: $header-height;
    padding: 0;
  }
  #body {
    padding: 20px;
  }
}
</style>
