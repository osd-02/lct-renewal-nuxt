<template>
  <v-sheet id="loading-wrapper" color="sub">
    <div id="contents">
      <v-sheet color="sub" class="font-Infinity text-4xl sm:text-6xl  mb-4">
        Lo culture
      </v-sheet>
      <v-progress-linear
        indeterminate
        color="#d14126"
        rounded
        class="mb-4"
      ></v-progress-linear>
      <v-sheet color="sub" class="font-xs sm:text-xl text-gray-500">
        <p>from Nagoya</p>
        <p>台北での文化的で自由な形態のストアに触発されて発起</p>
        <p>音楽に関わる記事を中心に手広く展開</p>
      </v-sheet>
    </div>
  </v-sheet>
</template>

<style lang="scss" scoped>
#loading-wrapper {
  height: 100vh;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-items: center;
  #contents {
    width: 70vw;
  }
}
</style>
