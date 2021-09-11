<template>
  <v-sheet color="secondary" id="top">
    <v-sheet color="secondary" class="min-h-screen wrapper">
      <v-sheet class="bg-opacity-0 bg-transparent pt-5 pl-2">
        <v-sheet class="text-xs sm:text-base bg-white bg-opacity-70 inline">
          {{ this.article.date }}
        </v-sheet>
      </v-sheet>
      <v-sheet class="bg-opacity-0 bg-transparent pl-2">
        <v-sheet class="text-base sm:text-xl bg-white bg-opacity-80 inline">
          <NuxtLink :to="`../${this.article.type}`">
            {{ this.article.type }}
          </NuxtLink>
        </v-sheet>
      </v-sheet>
      <v-sheet class="bg-opacity-0 bg-transparent ml-2 m-2">
        <v-sheet class="text-3xl sm:text-5xl bg-white bg-opacity-80 inline">
          {{ this.article.title }}
        </v-sheet>
      </v-sheet>
      <v-sheet
        v-show="this.article.from"
        class="bg-opacity-0 bg-transparent pl-2"
      >
        <v-sheet class="text-xs sm:text-base bg-white bg-opacity-80 inline">
          from {{ this.article.from }}
        </v-sheet>
      </v-sheet>
      <v-sheet class="bg-opacity-0 bg-transparent pr-2 text-right">
        <v-sheet class="text-xs sm:text-base bg-white bg-opacity-80 inline">
          Written by {{ this.article.writer }}
        </v-sheet>
      </v-sheet>
      <v-sheet class="pl-2 pr-2" color="secondary">
        <v-divider class="mb-1" />
        <v-divider class="mb-1" />
        <v-divider class="mb-1" />
      </v-sheet>
      <v-sheet
        color="secondary"
        v-html="`${this.article.body}`"
        class="pl-5 pr-5 pb-5"
      />
    </v-sheet>
    <v-sheet id="bottom" />
  </v-sheet>
</template>

<script>
export default {
  head() {
    return {
      title: "articles | " + this.article.title
    };
  },
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
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 600px;
  margin: auto;
}
.wrapper ::v-deep div {
  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 30px;
  }
  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin-top: 20px;
  }
  hr {
    margin-bottom: 16px;
    size: 3px;
  }
  p {
    font-size: 0.8rem;
  }
  iframe {
    width: 100%;
    margin-bottom: 16px;
    border-radius: 5px;
  }
  a {
    text-decoration: underline;
  }
}
</style>
