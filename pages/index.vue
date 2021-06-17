<template>
  <v-sheet id="wrapper">
    <v-sheet width="100%" min-height="100vh" color="secondary">
      <Articles :data="this.articles"/>
      <!-- <v-card
      class="mx-auto news"
      width="80vw"
      rounded
      elevation="6"
      color="sub"
      v-for="article in articles"
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
    </v-card> -->
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import Drawer from "~/components/Drawer.vue";

export default Vue.extend({
  components: { Drawer },
  async asyncData({ app }) {
    try {
      const articles = await app.flamelink.content.get({
        schemaKey: "articles",
        populate: true
      });
      return { articles };
    } catch (err) {
      console.log(err);
      return { myposts: [] };
    }
  }
});
</script>

<style lang="scss" scoped>
$header-height: 106px;
#wrapper {
  margin: 5vw;
  // .title-bar {
  //   // h5 {
  //   //   // float: right;
  //   // }
  // }

}
</style>
