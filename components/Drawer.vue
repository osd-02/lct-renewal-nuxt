<template>
  <v-navigation-drawer
    id="wrapper"
    :value="value"
    @input="$emit('input', $event)"
    fixed
    color="accent"
    temporary
    style="width: 50vw"
    class="font-Gentium text-white"
  >
    <div id="wrapper-contents">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-white text-4xl pt-2 pb-2">
              <NuxtLink to="/" class="text-white">
               lo-culture
              </NuxtLink>
            </v-list-item-title>
            <v-list-item-subtitle>
              <NuxtLink to="/profile" class="text-white underline">
                profile
              </NuxtLink>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider class="mb-1" color="white" />
      <v-divider class="mb-1" color="white" />
      <v-divider class="mb-1" color="white" />

      <v-list id="d-wrapper">
        <v-list-item v-for="drawerItem in drawerItems" :key="drawerItem.id">
          <v-list-item-title>
            <NuxtLink :to="`${drawerItem.link}`" class="text-white underline">
             {{ drawerItem.title }}
            </NuxtLink>
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider color="white"/>

      <v-list id="d-footer">
        <v-list-item id="d-footer-item">
          <v-list-item-content id="d-footer-item-content">
            <v-list-item-subtitle id="d-footer-item-content-subtitle" class="text-white">
              copyright ©︎lct
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawerItems: [
        { title: "Disk review", id: 1 ,link: "/disk-review"},
        { title: "Movie review", id: 2 ,link: "/movie-review"},
        { title: "Book review", id: 3 ,link: "/book-review"},
        { title: "live report", id: 4 ,link: "/live-report"},
        { title: "Interview", id: 5 ,link: "/interview"},
        { title: "column", id: 6 ,link: "/column"},
        { title: "activity", id: 7 ,link: "/activity"},
        { title: "memodandum", id: 8 ,link: "/memorandum"}
      ]
    };
  },
  props: {
    value: {
      type: Boolean,
      default: null
    }
  }
};
</script>

<style lang="scss" scoped>
$title-height: 114px;
$footer-height: 32px;
$divider-height: 15px;
#wrapper {
  #wrapper-contents {
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
  }
  #d-wrapper {
    height: calc(100% - #{$title-height} - #{$footer-height} - #{$divider-height});
    padding-left: 10vw;
    display: flex;
    flex-flow: column;
  }

  #d-footer {
    margin: 0;
    &-item {
      min-height: 0;
      &-content {
        padding: 0;
        &-subtitle {
          text-align: right;
        }
      }
    }
  }
}
</style>
