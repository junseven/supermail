<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <div v-for="(item,index) in cartList" :key="index">
        <cart-list-item :item-info="item"></cart-list-item>
      </div>
    </scroll>
  </div> 
</template>
<script >
  import CartListItem from "./CartListItem"
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: '', 
    data()  {
      return{

      }
    },
    components: {
      CartListItem,
      Scroll
    },
    computed:{
      cartList(){
        return this.$store.getters.cartList
      }
    },
    activated () {
    // console.log('0000');
    this.$refs.scroll.refresh()
  }
  }
</script>

<style scoped >
.cart-list{
  height:calc(100vh - 44px - 49px - 40px)
}
.content{
  height: 100%;
  overflow: hidden;
}
</style>
