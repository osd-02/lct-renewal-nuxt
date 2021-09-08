<template>
  <v-sheet id="wrapper" color="secondary">
        <v-sheet color="success" class="text-xl text-white pl-6 font-Gentium">
          <h5>Podcast</h5>
        </v-sheet>
        <iframe
          src="https://open.spotify.com/embed/show/4BJhE5oYD008YjkcwneSf4"
          width="100%"
          height="180px"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          scrolling="no"
          class="p-3"
        ></iframe>
        <iframe
          src="https://anchor.fm/undrcast/embed"
          height="140px"
          width="100%"
          frameborder="0"
          scrolling="no"
          class="p-3"
        ></iframe>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
});
</script>

<style lang="scss" scoped></style>
