<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    dark
    height="auto"
    progress-color="primary"
    class="max-h-full"
  >
    <v-carousel-item
      v-for="(article, i) in this.articles"
      :key="i"
      :to="`/articles/${article[0]}`"
      class="font-Gentium"
    >
      <v-sheet class="w-full relative">
        <v-img
          :src="article[1].img[0].image[0].url"
          lazy-src="https://picsum.photos/id/11/100/60"
          class="img"
          contain
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <v-sheet
          class="pl-2 pt-5 w-screen absolute top-0 left-0 bg-opacity-0 bg-transparent"
        >
          <v-sheet class="bg-opacity-0 bg-transparent">
            <v-sheet class="text-base sm:text-xl bg-white bg-opacity-70 inline">
              {{ article[1].publishDate }}
            </v-sheet>
          </v-sheet>
          <v-sheet class="bg-opacity-0 bg-transparent">
            <v-sheet class="text-base sm:text-xl bg-white bg-opacity-70 inline">
              {{ article[1].type }}
            </v-sheet>
          </v-sheet>
          <v-sheet class="bg-opacity-0 bg-transparent">
            <v-sheet class="text-3xl sm:text-5xl bg-white bg-opacity-70 inline">
              {{ article[1].title }}
            </v-sheet>
          </v-sheet>
          <v-sheet v-show="article[1].from" class="bg-opacity-0 bg-transparent">
            <v-sheet class="text-xs sm:text-base bg-white bg-opacity-70 inline">
              from {{ article[1].from }}
            </v-sheet>
          </v-sheet>
          <v-sheet class="bg-opacity-0 bg-transparent">
            <v-sheet class="text-xs sm:text-base bg-white bg-opacity-70 inline">
              Written by {{ article[1].writer }}
            </v-sheet>
          </v-sheet>
          <v-sheet class="bg-opacity-0 bg-transparent">
            <v-sheet class="text-xs sm:text-base bg-white bg-opacity-70 inline">
              Photo by {{ article[1].photographer }}
            </v-sheet>
          </v-sheet>
        </v-sheet>
        <v-sheet
          v-show="article[1].announceBody"
          class="text-right pl-2 pr-2 pb-10 pt-2 absolute bottom-0 right-0 bg-opacity-0 bg-transparent"
        >
          <v-sheet class="bg-opacity-0 bg-transparent">
            <v-sheet class="text-xs sm:text-base bg-white bg-opacity-70 inline">
              {{ article[1].announceBody }}
            </v-sheet>
          </v-sheet>
        </v-sheet>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="js">
import Vue from "vue";

export default Vue.extend({
  data () {
    return {
      articles: null
    }
  },
  mounted() {
    this.articles = this.$store.getters.recommendArticles;
    console.log(this.articles)
  }
});
</script>
