<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <img src="~assets/img/common/back.svg" style="margin-top:10px" @click="back()">
      </template>
      <template v-slot:middle >
        <div class="title">
          <div v-for="(item,index) in titles" 
               :key="index" 
               :class="currentActive==index?'active':''" 
               @click="setCurrent(index)"
               class="title-item">{{item}}</div>
        </div>
      </template>
    </nav-bar>
  </div> 
</template>
<script >

import NavBar from 'components/common/navbar/NavBar.vue';
  export default {
    name: 'navbar', 
    data()  {
      return{
        titles:['商品','参数','评论','推荐'],
        currentActive:0,
      }
    },
    components: {
      NavBar,
    },
    methods:{
      back(){
        this.$router.back();
      },
      setCurrent(index){
        this.currentActive = index;
        this.$emit('clickNav',index);
      }
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
