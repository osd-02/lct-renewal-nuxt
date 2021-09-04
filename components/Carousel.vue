<template>
  <v-carousel cycle hide-delimiter-background show-arrows-on-hover>
    <v-carousel-item v-for="(article, i) in this.articles" :key="i">
      <v-sheet height="100%">
        <v-container class="p-0">
          <v-row no-gutters>
            <v-cols cols="12" xs="6" sm="6">
              <img :src="article[1].img[0].image[0].url" />
            </v-cols>
            <v-cols cols="12" xs="6" sm="6">
              <div class="text-h2">
                {{ article[1].announceBody }}
              </div>
            </v-cols>
          </v-row>
        </v-container>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="js">
import Vue from "vue";

export default Vue.extend({
  data () {
    return {
      // colors: [
      //   'indigo',
      //   'warning',
      //   'pink darken-2',
      //   'red lighten-1',
      //   'deep-purple accent-4',
      // ],
      // slides: [
      //   'First',
      //   'Second',
      //   'Third',
      //   'Fourth',
      //   'Fifth',
      // ],
      articles: null
    }
  },
  mounted() {
    this.articles = this.$store.getters.recommendArticles;
  }
});
</script>
