<template>
  <v-sheet id="wrapper" color="secondary">
    <v-sheet color="primary" class="title-bar">
      <h5>News</h5>
    </v-sheet>
    <v-card
      class="mx-auto news"
      width="80vw"
      rounded
      elevation="6"
      color="sub"
      v-for="article in data"
      v-bind:key="article.publishDate"
    >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title
            >{{ article.title }} / {{ article.type }}</v-list-item-title
          >
          <v-list-item-subtitle>{{
            article.announceBody
          }}</v-list-item-subtitle>

          <img :src="article.img[0].image[0].url" />
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ['data']
});
</script>

<style lang="scss" scoped>
  .news {
    margin: 20px;
  }
</style>