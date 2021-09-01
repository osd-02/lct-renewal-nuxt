<template>
  <v-sheet id="wrapper">
    <v-sheet
      width="100%"
      min-height="100vh"
      color="secondary"
      id="home-location"
    >
      <Carousel :data="this.articles" id="carousel-location" />
      <News :data="this.articles" id="news-location" />
      <Articles :data="this.articles" id="articles-location" />
      <Profile :data="this.profile" id="profile-location" />
    </v-sheet>
  </v-sheet>
</template>

<script lang="js">
import Vue from "vue";
import Drawer from "~/components/Drawer.vue";

function formatTime (object, after) {
  for (const property in object) {
        object[property].publishDate = object[property].publishDate.slice(0, -6).replace(/-/g, after)
      }
}
export default Vue.extend({
  components: { Drawer },
  async asyncData({ app }) {
    try {
      const articles = await app.flamelink.content.get({
        schemaKey: "articles",
        populate: true
      });
      const profile = await app.flamelink.content.get({
        schemaKey: "profile",
        populate: true
      });

      formatTime(articles, '/')
      
      return { articles, profile };
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
}
</style>
