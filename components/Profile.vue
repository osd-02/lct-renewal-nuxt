<template>
  <v-sheet id="wrapper">
    <v-container>
      <v-row no-gutters>
        <v-sheet color="success" class="title-bar">
          <h5>Profile</h5>
        </v-sheet>
      </v-row>
      <v-row no-gutters>
        <v-col cols="11" class="article-child-wrapper">
          <v-sheet class="profile-body" id="about-loculture" color="secondary">
            <div class="profile-body-wrapper" v-html="`${data.body}`">
            </div>
          </v-sheet>
        </v-col>
        <v-col cols="1" class="bar-wrapper" no-gutters>
          <v-sheet color="success" class="bar" />
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["data"]
});
</script>

<style lang="scss" scoped>
.container {
  padding: 0;
  margin: 0;
  .title-bar {
    width: 100%;
    height: 4vw;
    min-height: 20px;
    display: flex;
    align-items: center;
    position: relative;
    h5 {
      padding: 0 5vw;
      -webkit-text-stroke: 1px;
      -webkit-text-fill-color: white;
      -webkit-text-stroke-color: white;
      font-size: 3vw;
    }
  }
  .bar-wrapper {
    margin-bottom: 5vw;
    .bar {
      width: 4vw;
      min-width: 20px;
      height: 100%;
      margin-left: auto;
    }
  }
  .article-child-wrapper {
    .profile-body {
      margin: 5vw 5vw 5vw 0;
      .profile-body-wrapper {
        padding: 5vw;
        border: solid;
        border-color: #d14126;
        word-wrap:break-all;
        pre {
            white-space: pre-wrap ;
        }
      }
    }
  }
}
</style>
