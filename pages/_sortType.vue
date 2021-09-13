<template>
  <v-sheet color="secondary min-h-screen w-full" id="top">
    <v-container fill-height fluid class="p-0">
      <v-row no-gutters>
        <v-sheet color="primary" class="bg-opacity-0 bg-transparent inline m-2">
          <v-sheet
            color="accent"
            class="relative top-1 left-1 pl-2 pr-2 text-3xl text-white bg-opacity-70 inline"
          >
            Sorted by {{ type }}
          </v-sheet>
        </v-sheet>
      </v-row>
      <v-row no-gutters color="secondary" class="w-full">
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          color="secondary"
          v-for="(article, i) in this.sortedArticles"
          v-bind:key="i"
          class="pl-2 pr-2 pt-2 pb-2"
        >
          <v-btn
            class="article font-Gentium h-full w-full p-0 block normal-case whitespace-normal"
            color="sub"
            :to="`/articles/${article.id}`"
            elevation="2"
          >
            <v-sheet class="relative w-full">
              <v-img
                v-if="article.img"
                :src="article.img[0].image[0].url"
                :lazy-src="require(`~/assets/img/loading2.jpg`)"
                height="200px"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-sheet
                class="absolute pt-4 pr-2 pl-2 w-full top-0 left-0 bg-opacity-0 bg-transparent"
              >
                <v-sheet
                  class="flex justify-between bg-opacity-0 bg-transparent"
                >
                  <v-sheet class="bg-opacity-0 bg-transparent text-left">
                    <v-sheet class="text-xs bg-white bg-opacity-70 inline">
                      Written by {{ article.writer }}
                    </v-sheet>
                  </v-sheet>
                  <v-sheet class="bg-opacity-0 bg-transparent text-left">
                    <v-sheet class="text-xs bg-white bg-opacity-70 inline">
                      Photo by {{ article.photographer }}
                    </v-sheet>
                  </v-sheet>
                </v-sheet>
                <v-sheet
                  class="flex justify-between bg-opacity-0 bg-transparent"
                >
                  <v-sheet class="bg-opacity-0 bg-transparent text-right">
                    <v-sheet
                      class="text-base bg-white bg-opacity-70 inline underline"
                    >
                      <NuxtLink :to="`${article.type}`">
                        {{ article.type }}
                      </NuxtLink>
                    </v-sheet>
                  </v-sheet>
                  <v-sheet class="bg-opacity-0 bg-transparent text-right">
                    <v-sheet class="text-base bg-white bg-opacity-70 inline">
                      {{ article.date }}
                    </v-sheet>
                  </v-sheet>
                </v-sheet>
                <v-sheet class="bg-opacity-0 bg-transparent text-center m-4">
                  <v-sheet class="text-3xl bg-white bg-opacity-70 inline">
                    {{ article.title }}
                  </v-sheet>
                </v-sheet>
              </v-sheet>
              <v-sheet
                v-show="article.announceBody"
                class="pl-2 pb-4 pr-2 absolute w-full left-0 bottom-0 bg-opacity-0 bg-opacity-0 bg-transparent break-word"
              >
                <v-sheet class="bg-opacity-0 bg-transparent">
                  <v-sheet class="text-xs bg-white bg-opacity-70 inline">
                    {{ article.announceBody }}
                  </v-sheet>
                </v-sheet>
              </v-sheet>
            </v-sheet>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-sheet id="bottom" />
  </v-sheet>
</template>

<script>
export default {
  head() {
    return {
      title: this.type
    };
  },
  data() {
    return {
      type: this.$route.params.sortType,
      articles: null,
      sortedArticles: {}
    };
  },
  created() {
    this.articles = this.$store.getters.articles;
    for (let i in this.articles) {
      if (this.articles[i]["type"] === this.type) {
        this.sortedArticles[i] = this.articles[i];
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
