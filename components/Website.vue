<template>
  <v-sheet id="wrapper" color="sub">
    <v-sheet color="success" class="text-xl text-white pl-6 font-Spaciouo">
      <h5>Website</h5>
    </v-sheet>
    <v-sheet color="sub">
      <v-list dense color="secondary">
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :href=item.link
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-sheet>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
      items: [
        { text: 'Suisei HP', link: 'https://suisei.herokuapp.com' },
        { text: '旧Lo-culture', link: 'http://lct.starfree.jp' },
      ],
    }),
});
</script>

<style lang="scss" scoped></style>
