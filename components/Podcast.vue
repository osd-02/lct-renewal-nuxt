<template>
  <v-sheet id="wrapper" color="sub">
        <v-sheet color="success" class="text-xl text-white pl-6 font-Gentium">
          <h5>Podcast</h5>
        </v-sheet>
        <iframe
          src="https://open.spotify.com/embed/show/4BJhE5oYD008YjkcwneSf4"
          width="100%"
          height="100%"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          class="p-3"
        ></iframe>
        <iframe
          src="https://anchor.fm/undrcast/embed"
          height="100%"
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
