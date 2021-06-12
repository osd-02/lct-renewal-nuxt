<template>
  <v-sheet id="wrapper">
    <v-sheet width="100%" min-height="100vh" color="secondary">
      <v-subheader>
        News
      </v-subheader>
      <v-card class="mx-auto" width="80vw" rounded elevation="6" color="sub">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Two-line item</v-list-item-title>
            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-card class="mx-auto" width="80vw" rounded elevation="6" color="sub">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Two-line item</v-list-item-title>
            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-card class="mx-auto" width="80vw" rounded elevation="6" color="sub">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Two-line item</v-list-item-title>
            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-card class="mx-auto" width="80vw" rounded elevation="6" color="sub">
        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Two-line item</v-list-item-title>
            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
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
      const baths = await app.flamelink.content.get({
        schemaKey: "baths", // Flamelinkで設定したschemeID
        populate: true
      });
      console.log({ baths });
      return { baths };
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
  // min-height: 130vh;
  // width: 100%;
  // position: relative;
  // padding-top: 30vh;
  // top: -30vh;

  #header-space {
    height: $header-height;
    padding: 0;
  }
  #body {
    padding: 20px;
    // background-color: "sub";
  }
}
</style>
