<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows-on-hover
    dark
    height="auto"
    progress-color="#fff"
    class="max-h-full"
  >
    <v-carousel-item
      v-for="(article, i) in this.articles"
      :key="i"
      :to="`/articles/${article[0]}`"
      class="font-Gentium"
    >
      <v-sheet color="primary" class="pl-2 text-base sm:text-xl">
        {{ article[1].type }}
      </v-sheet>
      <v-sheet color="primary" class="text-center text-3xl sm:text-5xl">
        {{ article[1].title }}
      </v-sheet>
      <v-responsive :aspect-ration="3 / 2" class="w-screen">
        <v-img :src="article[1].img[0].image[0].url" class="img" contain />
      </v-responsive>
      <v-sheet color="primary" class="text-xs sm:text-base pl-2 pr-2 pb-10 pt-2">
        {{ article[1].announceBody }}
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
