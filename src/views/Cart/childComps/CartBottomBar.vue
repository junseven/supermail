<template>
  <div class="bottom-bar">
    <div class="check-content" @click="allchecked=!allchecked">
      <check-button class="button" :checked="allchecked" />
      <span>全选</span>
    </div>
    <div class="total-price">
      合计: {{totalPrice}}
    </div>
    <div class="calculate">
      去计算({{counted}})
    </div>

  </div> 
</template>
<script >
  import CheckButton from 'components/content/checkButton/CheckButton';
  import { mapGetters } from "vuex";
  export default {
    name: '', 
    data()  {
      return{
        
      }
    },
    components: {
      CheckButton,
    },
    computed:{
      ...mapGetters(['cartList']),
      counted(){
        return this.cartList.filter(item=>item.checked).length
      },
      totalPrice(){
        return this.cartList.filter(item=>item.checked).reduce((total,item)=>item.price*item.count+total,0)
      },
      allchecked:{
        get(){
          if(this.cartList.length === 0) return false
          return this.cartList.every(item=>item.checked)
        },
        set(newnalue){
          this.cartList.forEach(element => {
            element.checked = newnalue
          })
        }
      }
    },

  }
</script>

<style scoped >
.bottom-bar{
  height: 40px;
  line-height: 40px;
  background-color: #bbb;
  position: relative;
  display: flex;
  text-align: center;
  font-size: 14px;
}
.check-content{
  display: flex;
  align-items: center;
  margin-left: 8px;

}
.button{
  margin-right: 5px ;
  height: 22px;
  line-height: 22px;
  width:22px;
}
.total-price{
  margin-left: 20px;
  flex: 1;
}
.calculate {
  width: 100px;
  background-color: pink;
}

</style>
