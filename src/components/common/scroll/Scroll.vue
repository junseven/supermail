<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script >
import BScroll from "better-scroll";
export default {
  name: "",
  data() {
    return {
      scroll: null,
    };
  },
  props:{
    probeType:{
      type:Number,
      default:0,
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click:true,
      probeType:this.probeType,
      pullUpLoad:this.pullUpLoad,
    });
    this.scroll.on('scroll', (position) => {
      //console.log(position.x, position.y)
      this.$emit("scroll",position)
    })
    this.scroll.on('pullingUp', (position) => {
      //console.log(position.x, position.y)
      this.$emit("pullingUp")
    })
  },
  components: {},
};
</script>

<style scoped >
</style>
