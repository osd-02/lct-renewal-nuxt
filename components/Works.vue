<template>
  <v-sheet id="wrapper" color="secondary" class="w-full font-Gentium">
    <v-container fill-height fluid class="p-0">
      <v-row no-gutters>
        <v-sheet color="primary" class="bg-opacity-0 bg-transparent inline m-2">
          <v-sheet
            color="accent"
            class="relative top-1 left-1 pl-2 pr-2 text-3xl text-white bg-opacity-70 inline"
          >
            Works
          </v-sheet>
        </v-sheet>
      </v-row>
      <v-row no-gutters color="secondary" class="w-full">
        <v-sheet color="accent" class="bg-opacity-0 bg-transparent inline ml-3">
          <v-sheet
            color="primary"
            class="relative top-1 left-1 pl-2 pr-2 text-xl text-white bg-opacity-70 inline"
          >
            Podcast
          </v-sheet>
        </v-sheet>
        <iframe
          src="https://open.spotify.com/embed/show/4BJhE5oYD008YjkcwneSf4"
          width="100%"
          height="180px"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          scrolling="no"
          class="p-3"
        ></iframe>
        <iframe
          src="https://anchor.fm/undrcast/embed"
          height="140px"
          width="100%"
          frameborder="0"
          scrolling="no"
          class="p-3"
        ></iframe>
      </v-row>
      <v-row no-gutters>
        <v-sheet color="accent" class="bg-opacity-0 bg-transparent inline ml-3">
          <v-sheet
            color="primary"
            class="relative top-1 left-1 pl-2 pr-2 text-xl text-white bg-opacity-70 inline"
          >
            Website
          </v-sheet>
        </v-sheet>
      </v-row>
      <v-row no-gutters color="secondary" class="w-full">
        <v-sheet color="sub" class="w-full">
          <v-list dense color="secondary" class="w-full">
            <v-list-item-group color="primary" class="w-full">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :href="item.link"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-sheet>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    items: [
      { text: "Suisei HP", link: "https://suisei.herokuapp.com" },
      { text: "旧Lo-culture", link: "http://lct.starfree.jp" }
    ]
  })
});
</script>

<style lang="scss" scoped></style>
