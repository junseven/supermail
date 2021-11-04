<template>
  <div id="app">
    <router-view  />
    <!-- <main-tabbar/> -->
  </div>
</template>

<script>
import MainTabbar from './components/content/mainTabBar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
@import './assets/css/base.css'
</style>
