<template>
  <div class="home">
    <nav-bar class="nav-bar">
      <template v-slot:middle>
        <div>购物街</div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend :recommends="recommends"></recommend>
    <feature-view></feature-view>
    <tab-control :title="['流行', '新款', '精选']"></tab-control>
  </div>
</template>
<script >
import { getHomeMultidata } from "network/home";

import HomeSwiper from "./childComps/HomeSwiper";
import recommend from "./childComps/recommend";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
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
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    recommend,
    FeatureView,
    TabControl,
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.banner.list;
      this.recommends = res.recommend.list;
      console.log(res);
    });
  },
};
</script>

<style scoped >
.home {
  padding-top: 44px;
  padding-bottom: 944px;
}
.nav-bar {
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: deeppink;
  color: #fff;
  box-shadow: 0 2px 2px rgba(255, 255, 255, 0.5);
}
.tabControl {
  position: sticky;
  top: 44px;
}
</style>
