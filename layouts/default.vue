<template>
  <v-app color="sub">
    <Loading v-show="loading" />
    <Header v-show="!loading" />
    <v-main v-show="!loading">
      <Nuxt />
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", '游明朝', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.loading = false;
  }
};
</script>
