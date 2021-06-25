<template>
  <Swiper class="detail-swiper">
    <SwiperItem v-for="(item,key) in topImages" :key="key">
      <img :src="item" alt="">
    </SwiperItem>
  </Swiper>
</template>
<script >
//导入轮播图组件
import { Swiper, SwiperItem } from "components/common/swiper/index";
  export default {
    name: '', 
    data()  {
      return{

      }
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped >
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>
