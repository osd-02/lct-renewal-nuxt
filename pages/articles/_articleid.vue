<template>
  <v-sheet>
    {{ this.article["announceBody"] }}
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      articleid: this.$route.params.articleid,
      articles: null,
      article: null
    };
  },
  created() {
    this.articles = this.$store.getters.articles;
    for (let i in this.articles) {
      if (this.articles[i]["id"] === this.articleid) {
        this.article = this.articles[i];
      }
    }
    console.log(this.article);
  }
};
</script>
