<template>
  <div class="cb" :class="checked?'ischecked':''" >
    <img src="~assets/img/cart/tick.svg" alt="">
  </div> 
</template>
<script >
  export default {
    name: '', 
    data()  {
      return{

      }
    },
    props:{
      checked:{
        type:Boolean,
        default(){
          return false
        }
      }
    },
    components: {

    }
  }
</script>

<style scoped >
  .cb{
    width:22px;
    height:22px;
    border-radius:50%;
    border:2px solid #aaa;
    background-color: #fff;
  }
  .ischecked{
    background-color: pink;
    border-color: pink;
  }
</style>
