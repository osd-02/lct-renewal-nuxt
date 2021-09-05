<template>
  <v-sheet id="loading-wrapper" color="sub">
    <div id="contents">
      <v-progress-circular
        :size="100"
        :width="10"
        color="#d14126"
        indeterminate
      ></v-progress-circular>
      <p>now loading......</p>
    </div>
  </v-sheet>
</template>

<style lang="scss" scoped>
#loading-wrapper {
  min-height: 100vh;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-items: center;
  #contents {
    .v-progress-circular {
      margin: 20px auto;
      display: block;
    }
  }
}
</style>
