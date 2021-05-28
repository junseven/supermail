<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <img src="~assets/img/common/back.svg" style="margin-top:10px">
      </template>
      <template v-slot:middle >
        <div class="title">
          <div v-for="(item,index) in titles" 
               :key="index" 
               :class="currentActive==index?'active':''" 
               @click="currentActive=index"
               class="title-item">{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div> 
</template>
<script >

import NavBar from 'components/common/navbar/NavBar.vue';
  export default {
    name: '', 
    data()  {
      return{
        titles:['商品','评论','参数','推荐'],
        currentActive:0,
      }
    },
    components: {
      NavBar,
    }
  }
</script>

<style scoped >
  .title{
    display: flex;
  }
  .title-item{
    flex:1;
  }
  .active{
    color:var(--color-high-text);
  }
</style>
