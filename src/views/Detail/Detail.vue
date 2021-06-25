<template>
  <div id="detail">
    <detail-nav class="detail-nav"></detail-nav>
    <scroll
      ref="scroll"
      :probeType="3"
      class="content">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"/>
      <detail-params-info  :paramsInfo="paramsInfo "/>
    </scroll>  
    
  </div> 
</template>
<script >
import DetailNav from './childDetail/DetailNav';//导航栏组件
import DetailSwiper from './childDetail/DetailSwiper';//轮播图组件
import DetailBaseInfo from './childDetail/DetailBaseInfo';//商品信息组件
import DetailShopInfo from './childDetail/DetailShopInfo';//商铺组件
import DetailGoodsInfo from './childDetail/DetailGoodsInfo';//详细信息组件
import DetailParamsInfo from './childDetail/DetailParamsInfo';//配置信息组件

import Scroll from 'components/common/scroll/Scroll'
import { getDetail, Goods,Shop,GoodsParams } from 'network/detail';
  export default {
    name: 'detail', 
    data()  {
      return{
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramsInfo:{},
        recommends:[],
        commentInfo:{},
      }
    },
    created(){
      //保存传入的iid
      this.iid = this.$route.params.iid
      // console.log(this.iid);
      //根据id获取商品数据
      getDetail(this.iid).then((res)=>{
        console.log(res);
        const data = res.result

        //1.获得顶部轮播图数据
        this.topImages = data.itemInfo.topImages

        //2.获取商品基本信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        
        //3.获取商铺信息
        this.shop = new Shop(data.shopInfo)
        
        //4.获取商品的详细信息
        this.detailInfo = data.detailInfo
        
        //5.获取商品的参数信息
        this.paramsInfo = new GoodsParams(data.itemParams.info,data.itemParams.rule)

        //6.获取评论信息
        this.commentInfo = data.rate.cRate !==0?data.rate.list[0]:{}
      })
    },
    methods:{
      imgLoad(){
        this.$refs.scroll.refresh();
      }
    },
    components: {
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamsInfo,
    }
  }
</script>

<style scoped >
  #detail{
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }

  .content{
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>
