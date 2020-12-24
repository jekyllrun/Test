<template>
  <div id="home">
    <NavBar class="home-nav-bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </NavBar>
    <!-- vue3中需要增加v-if判断（异步操作）,否则程序会报错 -->
  <HomeSwiper v-if="banners.length>0" :cbanners="banners"></HomeSwiper>
  <RecommendView :crecommends="recommends"/>
  <FeatureView/>
  
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView"

  import {
    getHomeMultidata
  } from "network/home";
  


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data() {
      return {
       /*  banners: [{acm: "3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
height: 390,
height923: 390,
image: "https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg",
image923: "https://s10.mogucdn.com/mlcdn/c45406/180926_7d5c521e0aa3h38786lkakebkjlh8_750x390.jpg",
link: "https://act.mogujie.com/huanxin0001?acm=3.mce.2_10_1jhwa.43542.0.ccy5br4OlfK0Q.pos_0-m_454801-sd_119",
title: "焕新女装节",
width: 750,
width923: 750},{acm: "3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
height: 390,
height923: 390,
image: "https://s10.mogucdn.com/mlcdn/c45406/180926_31eb9h75jc217k7iej24i2dd0jba3_750x390.jpg",
image923: "https://s10.mogucdn.com/mlcdn/c45406/180926_14l41d2ekghbeh771g3ghgll54224_750x390.jpg",
link: "https://act.mogujie.com/ruqiu00001?acm=3.mce.2_10_1ji16.43542.0.ccy5br4OlfK0R.pos_1-m_454889-sd_119",
title: "入秋穿搭指南",
width: 750,
width923: 750}], */
        banners:[],
        recommends: []
      }
    },
    created() {

      getHomeMultidata().then(res => {
        console.log(res.data.banner.list);
        console.log(res.data.recommend.list);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }

</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }

  .home-nav-bar {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;

  }

  .home-tab-control {
    /*两个要混合使用*/
    position: sticky;
    top: 43px;
    /*顶部navbar的高度*/
    z-index: 9;
  }

  .home-scroller {
    /*height:300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }



</style>
