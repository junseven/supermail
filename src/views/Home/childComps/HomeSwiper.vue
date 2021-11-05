<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imageload" alt="" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script >
import { Swiper, SwiperItem } from "components/common/swiper/index";
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad:false
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods:{
    imageload(){
      if(!this.isLoad){
        this.$emit('imageload')
        this.isLoad = true;
      }
      
    }
  }
};
</script>

<style scoped >
</style>
