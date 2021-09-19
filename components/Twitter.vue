<template>
  <v-sheet id="wrapper" color="secondary" class="w-full font-Gentium">
    <v-container fill-height fluid class="p-0">
      <v-row no-gutters>
        <v-sheet color="primary" class="bg-opacity-0 bg-transparent inline m-2">
          <v-sheet
            color="accent"
            class="relative top-1 left-1 pl-2 pr-2 text-3xl text-white bg-opacity-70 inline"
          >
            Twitter
          </v-sheet>
        </v-sheet>
      </v-row>
      <v-row no-gutters color="secondary" class="w-full">
        <v-sheet class="m-4 w-full">
          <a
            class="twitter-timeline"
            data-lang="ja"
            :data-height="this.height"
            data-theme="dark"
            href="https://twitter.com/lo_culture?ref_src=twsrc%5Etfw"
            >Tweets by lo culture</a
          >
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charset="utf-8"
          ></script>
        </v-sheet>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style lang="scss" scoped></style>

<script>
export default {
  props: ["height"],
};
</script>
