<template>
  <v-sheet id="wrapper" color="secondary">
    <v-container fill-height fluid>
      <v-row no-gutters class="block">
        <v-sheet
          color="accent"
          class="title-bar text-2xl pl-3 text-white font-Gentium"
        >
          <h5>News</h5>
        </v-sheet>
      </v-row>
      <v-row no-gutters color="secondary">
        <v-col
          cols="12"
          xs="6"
          sm="12"
          class="article-child-wrapper"
          color="secondary"
          v-for="(article, i) in this.articles"
          v-bind:key="i"
        >
          <v-sheet color="secondary" class="pl-2 pt-1 pb-1 pr-2 h-full">
            <v-btn
              class="article rounded-2 font-Gentium h-full w-full"
              color="sub"
              :to="`/articles/${article.id}`"
              elevation="2"
            >
              <div class="article-text">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle class="underline">
                      <NuxtLink :to="`${article.type}`">
                        {{ article.type }}
                      </NuxtLink>
                    </v-list-item-subtitle>
                    <v-list-item-body class="text-xs">
                      {{ article.publishDate }}
                    </v-list-item-body>
                    <v-list-item-body class="text-xs">
                      {{ article.announceBody }}
                    </v-list-item-body>
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
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    articles: null
  }),
  mounted() {
    this.articles = this.$store.getters.newsArticles;
  }
});
</script>

<style lang="scss" scoped>
#wrapper {
  padding: 0;
  margin: 0;
  .container {
    padding: 0;
    margin: 0;
    .bar-wrapper {
      margin-bottom: 5vw;
      .bar {
        width: 4vw;
        min-width: 20px;
        height: 100%;
        margin-left: auto;
      }
    }
    .article-child-wrapper {
      margin: 0;
      .article {
        // margin: 1vw;
        width: calc(100%);
        display: block;
        padding: 0;
        height: auto;
        .article-text {
          width: 100%;
          font-size: min(2vw, 18px);
          overflow-wrap: break-word;
          text-transform: none;
          white-space: normal;
          .article-title {
            margin: 10px;
          }
        }
      }
    }
  }
}
</style>
