<template>
  <div>
    <nav-bar class="nav-bar">
      <template v-slot:middle >
        <div >
          购物车({{cartLength}})
        </div>
      </template>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div> 
</template>

<script >
import NavBar from 'components/common/navbar/NavBar.vue'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import {mapGetters} from 'vuex' 
  export default {
    name: 'Cart', 
    data() {
      return{

      }
    },
    components: {
      NavBar,
      CartList,
      CartBottomBar,
    },
    computed:{
      ...mapGetters(['cartLength'])
    }
  }

</script>

<style scoped >
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
}
</style>
