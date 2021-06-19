<template>
  <v-sheet id="wrapper" color="secondary">
    <v-container>
      <v-row no-gutters>
        <v-sheet color="success" class="title-bar">
          <h5>News</h5>
        </v-sheet>
      </v-row>
      <v-row no-gutters>
        <v-col cols="11" class="article-child-wrapper">
          <v-btn
            left
            class="article"
            elevation="8"
            color="sub"
            v-for="article in data"
            v-bind:key="article.publishDate"
          >
            <div class="article-text">
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title>{{ article.publishDate }}</v-list-item-title>
                  <v-list-item-title>{{ article.title }}</v-list-item-title>
                  <v-list-item-title>{{ article.type }}</v-list-item-title>
                  <v-list-item-title>{{
                    article.announceBody
                  }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-btn>
        </v-col>
        <v-col cols="1" class="bar-wrapper" no-gutters>
          <v-sheet color="success" class="bar" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["data"]
});
</script>

<style lang="scss" scoped>
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
      margin: 5vw 5vw 5vw 0;
      width: calc(100% - 5vw);
      display: block;
      padding: 0;
      height: auto;
      .img-wrapper {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .article-text {
        width: 100%;
        .v-list-item__title {
          text-align: left;
          font-size: 3vw;
        }
      }
    }
  }
}
</style>
