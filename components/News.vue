<template>
  <v-sheet id="wrapper">
    <v-container fill-height　fluid>
      <v-row no-gutters>
        <v-sheet color="success" class="title-bar">
          <h5>News</h5>
        </v-sheet>
      </v-row>
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="6"
          md="4"
          class="article-child-wrapper"
          v-for="article in this.articles"
          v-bind:key="article.publishDate"
        >
          <v-btn
            class="article rounded-0 font-Gentium h-full"
            color="sub"
            elevation="0"
            :to="`/articles/${article.id}`"
          >
            <div class="article-text">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-body>{{ article.publishDate }}</v-list-item-body>
                  <v-list-item-subtitle>
                    {{ article.type }}
                  </v-list-item-subtitle>
                  <v-list-item-title class="article-title text-3xl">{{
                    article.title
                  }}</v-list-item-title>
                  <div class="announce-body">{{ article.announceBody }}</div>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-btn>
        </v-col>
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

<style lang="scss" scoped>
#wrapper {
  padding: 0;
  margin: 0;
  .container {
    padding: 0;
    margin: 0;
    .title-bar {
      width: 100%;
      height: 4vw;
      min-height: 20px;
      display: flex;
      align-items: center;
      position: relative;
      h5 {
        padding: 0 5vw;
        -webkit-text-stroke: 1px;
        -webkit-text-fill-color: white;
        -webkit-text-stroke-color: white;
        font-size: 3vw;
      }
    }
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
