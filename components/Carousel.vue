<template>
  <v-responsive :aspect-ration="3 / 2" class="w-screen">
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      light
      height="auto"
    >
      <v-carousel-item v-for="(article, i) in this.articles" :key="i" :to="`/articles/${article[0]}`">
          <v-img :src="article[1].img[0].image[0].url" class="img" contain />
      </v-carousel-item>
    </v-carousel>
  </v-responsive>
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
    console.log(`${this.articles}`)
  }
});
</script>
