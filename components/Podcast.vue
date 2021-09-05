<template>
  <v-sheet id="wrapper" color="sub">
    <v-container fill-height fluid class="p-0">
      <v-row no-gutters class="block">
        <v-sheet color="success" class="text-xl text-white pl-6 font-Spaciouo">
          <h5>Podcast</h5>
        </v-sheet>
      </v-row>
      <v-row no-gutters>
        <iframe
          src="https://open.spotify.com/embed/show/4BJhE5oYD008YjkcwneSf4"
          width="100%"
          height="200px"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          class="p-3"
        ></iframe>
        <iframe
          src="https://anchor.fm/undrcast/embed/episodes/2-2---undrcast-e16inr1"
          height="200px"
          width="100%"
          frameborder="0"
          scrolling="no"
          class="p-3"
        ></iframe>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  data: () => ({
    articles: null
  }),
  mounted() {
    this.articles = this.$store.getters.articles;
  }
});
</script>

<style lang="scss" scoped></style>
