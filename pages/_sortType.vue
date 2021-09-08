<template>
  <v-sheet color="secondary min-h-screen w-full" id="top">
    <v-container fill-height fluid class="p-0 m-0">
      <v-row no-gutters class="block">
        <v-sheet
          color="accent"
          class="title-bar text-2xl pl-3 text-white font-Gentium"
        >
          <h5>Soted by {{ this.type }}</h5>
        </v-sheet>
      </v-row>
      <v-row no-gutters color="secondary">
        <v-col
          cols="12"
          xs="6"
          sm="6"
          md="4"
          class="article-child-wrapper m-0"
          v-for="article in this.sortedArticles"
          v-bind:key="article.publishDate"
        >
          <v-btn
            class="article rounded-0 font-Gentium h-full block p-0"
            color="secondary"
            elevation="0"
            :to="`/articles/${article.id}`"
          >
            <div class="article-text w-full normal-case">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-body class="text-left">{{
                    article.publishDate
                  }}</v-list-item-body>
                  <v-list-item-subtitle class="text-left">
                    {{ article.type }}
                  </v-list-item-subtitle>
                  <v-list-item-title
                    class="article-title text-2xl text-center"
                    >{{ article.title }}</v-list-item-title
                  >
                  <v-list-item-subtitle class="text-right"
                    >by {{ article.writer }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-sheet id="bottom" />
  </v-sheet>
</template>

<script>
export default {
  head() {
    return {
      title: this.type
    }
  },
  data() {
    return {
      type: this.$route.params.sortType,
      articles: null,
      sortedArticles: {}
    };
  },
  created() {
    this.articles = this.$store.getters.articles;
    for (let i in this.articles) {
      if (this.articles[i]["type"] === this.type) {
        this.sortedArticles[i] = this.articles[i];
      }
    }
    console.log(this.sortedArticles);
  }
};
</script>

<style lang="scss" scoped></style>
