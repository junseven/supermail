<template>
  <div id="detail">
    <detail-nav ref="nav" class="detail-nav" @clickNav="scrollto"></detail-nav>
    <scroll
      ref="scroll"
      :probeType="3"
      class="content"
      @scroll="contentScroll">
      <detail-swiper :topImages="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detailInfo="detailInfo" @imgLoad="imgLoad"/>
      <detail-params-info ref="params" :paramsInfo="paramsInfo "/>
      <detail-comment-info ref="comment" :commentInfo="commentInfo"/>
      <goods-list ref="goods" :goodsList="this.recommends"></goods-list>
      
    </scroll>  
    <back-top v-show="showTop" @click.native="backTop"></back-top>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div> 
</template>
<script >
import DetailNav from './childDetail/DetailNav';//导航栏组件
import DetailSwiper from './childDetail/DetailSwiper';//轮播图组件
import DetailBaseInfo from './childDetail/DetailBaseInfo';//商品信息组件
import DetailShopInfo from './childDetail/DetailShopInfo';//商铺组件
import DetailGoodsInfo from './childDetail/DetailGoodsInfo';//详细信息组件
import DetailParamsInfo from './childDetail/DetailParamsInfo';//配置信息组件
import DetailCommentInfo from './childDetail/DetailCommentInfo';//评论信息组件
import GoodsList from "components/content/goods/GoodsList";
import DetailBottomBar from './childDetail/DetailBottomBar';//评论信息组件

import backTop from  'components/content/backTop/BackTop';
import Scroll from 'components/common/scroll/Scroll'
import { getDetail,getRecommend, Goods,Shop,GoodsParams } from 'network/detail';
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
        commentInfo:{},
        recommends:[],
        navarr:['scroll','params','comment','goods'],
        currentIndex:0,
        showTop:false,
      }
    },
    created(){
      //保存传入的iid
      this.iid = this.$route.params.iid
      // console.log(this.iid);
      //根据id获取商品数据
      getDetail(this.iid).then((res)=>{
        //console.log(res);
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
        
      }),
      
      getRecommend().then((res)=>{
        this.recommends =res.data.list
        //console.log(this.recommends);
      })

    },
    methods:{
      imgLoad(){
        this.$refs.scroll.refresh();
        
      },

      //头部导航跳转
      scrollto(value){
        //console.log(this.$refs[this.navarr[value]].$el.offsetTop);
        this.$refs.scroll.scroll.scrollTo(0,-this.$refs[this.navarr[value]].$el.offsetTop,100)
      },

      //滚动获取位置
      contentScroll(position){
        const positionY = -position.y;
        for(const index in this.navarr){
          if(this.currentIndex != index && ((+index<3&&-position.y>=this.$refs[this.navarr[index]].$el.offsetTop&&-position.y<this.$refs[this.navarr[+index+1]].$el.offsetTop)||(+index==3&&-position.y>=this.$refs[this.navarr[index]].$el.offsetTop)))
          {
            this.currentIndex = index;
            this.$refs.nav.currentActive = index;
            //console.log(this.currentIndex);
          }
        }

        // 是否显示回到底部按钮的判断
        this.showTop = positionY>1000
      },
      backTop(){
        this.$refs.scroll.scroll.scrollTo(0,0)
      },
      addToCart(){
        console.log('add')
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid 
        this.$store.dispatch('addCart',product)
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
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      backTop,
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
    height: calc(100% - 44px - 44px);
    overflow: hidden;
  }
</style>
