<template>
  <v-sheet id="wrapper">
    <v-sheet width="100%" min-height="100vh" color="secondary">
      <Articles :data="this.articles"/>
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
