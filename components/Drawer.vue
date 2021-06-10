<template>
  <v-navigation-drawer
    id="wrapper"
    :value="value"
    @input="$emit('input', $event)"
    fixed
    color="accent"
  >
    <div id="wrapper">
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Contents navi
            </v-list-item-title>
            <v-list-item-subtitle>
              lct
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list id="d-wrapper">
        <v-list-item v-for="drawerItem in drawerItems" :key="drawerItem.id">
          <v-list-item-title>
            {{ drawerItem.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list id="d-footer">
        <v-list-item id="d-footer-item">
          <v-list-item-content id="d-footer-item-content">
            <v-list-item-subtitle id="d-footer-item-content-subtitle">
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
        { title: "New post", id: 1 },
        { title: "Articles", id: 2 },
        { title: "Review", id: 3 }
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
$title-height: 82px;
$footer-height: 32px;

#wrapper {
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#d-wrapper {
  height: calc(100% - #{$title-height} - #{$footer-height});
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
</style>
