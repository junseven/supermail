<template>
   <div class="tab-item" @click="itemClick">
     <slot ></slot>
     <div :style="activeStyle"><slot name="item-text"></slot></div>
   </div>
</template>
<script >
  export default {
    name:"TabItem",
    props:{
      path:String,
      activeColor:{
        type:String,
        default:'red'
      }
    },
    data(){
      return {

      }
    },
    computed:{
      isActive(){
        return this.$route.path.includes(this.path)
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path).catch(err=>{})
      }
    }
  }
</script>

<style scoped >
   .tab-item{
    flex:1;
    text-align:center;
    height: 49px;
    font-size:14px;
  }
  .tab-item img{
    width: 24px;
    margin-top:3px;
    vertical-align: middle;
  }
</style>
