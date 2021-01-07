<template>
  <div id="home">
    <NavBar class="home-nav-bar">
      <template v-slot:center>
        <div>购物街</div>
      </template>
    </NavBar>

    <Scroll class="content"  ref='scroller' :probeType="3" @scroll="contentScroll" :pullUpLoad="true"
    @pullingUp="loadMore">

    <!-- vue3中需要增加v-if判断（异步操作）,否则程序会报错 -->
    <HomeSwiper v-if="banners.length>0" :cbanners="banners"></HomeSwiper>
    <RecommendView :crecommends="recommends" />
    <FeatureView />
    <TabControl class="tab-control" :titles="['流行','新款','精选']"  @tabClick="tableClick"/>
    <GoodsList :goods="showGoods"/>

    </Scroll>

    <BackTop @click="backClick" v-show="isShowBackTop"/>

  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  import TabControl from "components/contents/tabcontrol/TabControl"
  import GoodsList from "components/contents/goods/GoodsList"
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/contents/backTop/BackTop'

  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView"
 

  import {
    getHomeMultidata,
    getHomeGoods
  } from "network/home";



  export default {
    name: "Home",
    components: {
      NavBar,
      TabControl,
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList,
      Scroll,
      BackTop
      
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          },
        },
        currentType:'pop',
        isShowBackTop:false
      }
    },
    computed:{
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      /* 1.请求网络数据 */
      this.getHomeMultidata()

      /* 2.请求商品数据 */
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          /*  console.log(res.data);
           console.log(res.data.banner.list);
           console.log(res.data.recommend.list); */
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })

      },
      getHomeGoods(type) {

        const page =this.goods[type].page+1   //动态获取

        getHomeGoods(type, page).then(res => {
         /*  console.log(res); */
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1
          /* console.log(this.goods); */
        
          this.$refs.scroller.finishPullUp()


        })
      },

      tableClick(index) {
        /* console.log(index); */
        switch(index) {
          case 0:
            this.currentType='pop'
            break
          case 1:
            this.currentType='new'
            break
          case 2:
            this.currentType='sell'
            break
        }
      },

      backClick() {
        this.$refs.scroller.scrollTo(0,0)
      },

      contentScroll(positon) {
        this.isShowBackTop = (-positon.y) > 1000
      },


      loadMore(){
        console.log('加载更多！');
        this.getHomeGoods(this.currentType)


        this.$refs.scroller.refresh()  //手工刷新scroll中可滚动的区域。

      }

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


  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 99;
  } 


  .content {
   
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  } 

  /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top:44px;
  }
 */
</style>
