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
    <scroll class="content">
      
    </scroll>
    <ul>
        <li>text1</li>
        <li>text2</li>
        <li>text3</li>
        <li>text4</li>
        <li>text5</li>
        <li>text6</li>
        <li>text7</li>
        <li>text8</li>
        <li>text9</li>
        <li>text10</li>
        <li>text11</li>
        <li>text12</li>
        <li>text13</li>
        <li>text14</li>
        <li>text15</li>
        <li>text16</li>
        <li>text17</li>
        <li>text18</li>
        <li>text19</li>
        <li>text20</li>
        <li>text21</li>
        <li>text22</li>
        <li>text23</li>
        <li>text24</li>
        <li>text25</li>
        <li>text26</li>
        <li>text27</li>
        <li>text28</li>
        <li>text29</li>
        <li>text30</li>
        <li>text31</li>
        <li>text32</li>
        <li>text33</li>
        <li>text34</li>
        <li>text35</li>
        <li>text36</li>
        <li>text37</li>
        <li>text38</li>
        <li>text39</li>
        <li>text40</li>
        <li>text41</li>
        <li>text42</li>
        <li>text43</li>
        <li>text44</li>
        <li>text45</li>
        <li>text46</li>
        <li>text47</li>
        <li>text48</li>
        <li>text49</li>
        <li>text50</li>
    </ul>
  </div>
</template>
<script >
import { getHomeMultidata, getHomeGoods } from "network/home";

import HomeSwiper from "./childComps/HomeSwiper";
import recommend from "./childComps/recommend";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import scroll from "components/common/scroll/Scroll";

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
    scroll,
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.banner.list;
      this.recommends = res.recommend.list;
      console.log(res);
    });
    getHomeGoods("sell", 1).then((res) => {
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

.content {
  height: 300px;
  overflow: scroll;
}
</style>
