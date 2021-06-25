<template>
  <div id="app">
    <keep-alive exclude="detail">
     <router-view></router-view>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>
<script>
import MainTabbar from "components/content/mainTabBar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabbar,
  },
};
</script>
<style>
@import url("assets/css/base.css");
</style>