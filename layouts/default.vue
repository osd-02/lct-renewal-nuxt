<template>
    <!-- <div>
      <v-sheet color="main" height="100vh" width="100vw" />
    </div> -->

    <v-app>
      <Header />
      <v-main>
        <Nuxt />
      </v-main>
    </v-app>
</template>

<style lang="scss" scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
.v-application {
  background-color: #ccc8bf;
}
</style>
