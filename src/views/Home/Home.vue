<template>
  <div class="home">
    <nav-bar class="home-nav">
      <template v-slot:middle>
        <div>购物街</div>
      </template>
    </nav-bar>
    <scroll class="content" 
            ref="scroll" 
            :probeType="3" 
            @scroll="contentScroll"
            :pullUpLoad="true"
            @pullingUp="loadMore()">
      <home-swiper :banners="banners"></home-swiper>
      <recommend :recommends="recommends"></recommend>
      <feature-view></feature-view>
      <tab-control
        :title="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goodsList="goods[currentType].list"></goods-list>
    </scroll>
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>
<script >
import { getHomeMultidata, getHomeGoods } from "network/home";

import HomeSwiper from "./childComps/HomeSwiper"; //轮播图模块
import recommend from "./childComps/recommend";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import scroll from "components/common/scroll/Scroll";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    recommend,
    FeatureView,
    TabControl,
    scroll,
    GoodsList,
    BackTop,
  },
  created() {
    //获取轮播图数据
    getHomeMultidata().then((res) => {
      this.banners = res.banner.list;
      this.recommends = res.recommend.list;
    });

    //获取商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    tabClick(index) {
      this.currentType = Object.keys(this.goods)[index];
    },

    getHomeGoods(type) {
      this.goods[type].page +=1,
      getHomeGoods(type, this.goods[type].page).then((res) => {
        //console.log(res);
        this.goods[type].list = res.list;
      });
    },

    backClick() {
      console.log(this.$refs.scroll.scroll);
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isShowBackTop = position.y < -1000;
    },
    loadMore(){
       this.getHomeGoods(this.currentType)
      
    },
  },
};
</script>

<style scoped >
.home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  background-color: deeppink;
  color: #fff;

  box-shadow: 0 2px 2px rgba(255, 255, 255, 0.5);
}
.tabControl {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
