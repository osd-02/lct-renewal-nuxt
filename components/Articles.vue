<template>
  <v-sheet id="wrapper" color="secondary">
    <v-container>
      <v-row no-gutters>
        <v-sheet color="primary" class="title-bar">
          <h5>Articles</h5>
        </v-sheet>
      </v-row>
      <v-row no-gutters>
        <v-col cols="1" class="bar-wrapper" no-gutters>
          <v-sheet color="primary" class="bar" />
        </v-col>
        <v-col class="article-child-wrapper">
          <v-btn
            class="article"
            elevation="2"
            color="sub"
            v-for="article in data"
            v-bind:key="article.publishDate"
          >
            <div class="img-wrapper">
              <img :src="article.img[0].image[0].url" />
              <v-list-item two-line>
                <v-list-item-content>
                  <v-list-item-title
                    >{{ article.title }} / {{ article.type }}</v-list-item-title
                  >
                  <!-- <v-item>{{ article.announceBody }}</v-list-item> -->
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
    height: 5vw;
    min-height: 30px;
    display: flex;
    align-items: center;
    h5 {
      padding: 0 5vw;
      -webkit-text-stroke: 1px;
      -webkit-text-fill-color: white;
      -webkit-text-stroke-color: white;
      font-size: 3.5vw;
    }
  }
  .bar-wrapper {
    margin-bottom: 37.5px;
    .bar {
      width: 5vw;
      min-width: 30px;
      height: 100%;
    }
  }
  .article-child-wrapper {
    margin: 5vw 0 5vw 5vw;
    .article {
      margin: 20px;
      width: 100%;
      display: block;
      margin: 0 0 5vw 0;
      padding: 0;
      height: auto;
      img-wrapper {
        position: absolute;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
