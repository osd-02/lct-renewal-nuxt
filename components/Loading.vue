<template>
  <div id="loading-wrapper">
    <div id="contents">
      <v-progress-circular
        :size="100"
        :width="10"
        color="#B0CBE7"
        indeterminate
      ></v-progress-circular>
      <p>now loading......</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#loading-wrapper {
  min-height: 90vh;
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
