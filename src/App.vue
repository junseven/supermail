<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view :key="$route.fullPath" />
    </keep-alive>
    <main-tabbar/>
  </div>
</template>

<script>
import MainTabbar from './components/content/mainTabBar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
@import './assets/css/base.css'
</style>
