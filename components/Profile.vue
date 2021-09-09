<template>
  <v-sheet color="secondary" id="top">
    <v-sheet color="secondary" class="min-h-screen wrapper">
      <v-sheet class="bg-opacity-0 bg-transparent pt-5 pl-2 pb-5">
        <v-sheet class="text-3xl sm:text-5xl bg-white bg-opacity-80 inline">
          Profile + 
        </v-sheet>
      </v-sheet>
      <v-sheet class="pl-2 pr-2" color="secondary">
        <v-divider class="mb-1" />
        <v-divider class="mb-1" />
        <v-divider class="mb-1" />
      </v-sheet>
      <v-sheet
        color="secondary"
        v-html="`${this.profile}`"
        class="pl-5 pr-5 pb-5"
      />
    </v-sheet>
    <v-sheet id="bottom" />
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: "profile"
    };
  },
  data: () => ({
    profile: null
  }),
  mounted(){
    this.profile = this.$store.getters.profile
  }
});
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 600px;
  margin: auto;
}
.wrapper ::v-deep div {
  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-top: 30px;
  }
  h3 {
    font-size: 1rem;
    font-weight: 700;
    margin-top: 20px;
  }
  hr {
    margin-bottom: 16px;
    size: 3px;
  }
  p {
    font-size: 0.8rem;
  }
  iframe {
    width: 100%;
    margin-bottom: 16px;
    border-radius: 5px;
  }
  a {
    text-decoration: underline;
  }
}
</style>
