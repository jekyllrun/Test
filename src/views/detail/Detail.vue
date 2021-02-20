<template>
 <div class="detail">
  <DetailNavbar class="detail-nav">
  </DetailNavbar>
  <scroll class="content" :pullUpLoad="true">
    <DetailSwiper v-if="topImages.length>0" :dtopImages="topImages">
    </DetailSwiper>
    <DetailBaseInfo :goods="goods">
    </DetailBaseInfo>
  </scroll>
  </div>
</template>

<script>
  import DetailNavbar from 'views/detail/childComps/DetailNavbar'
  import DetailSwiper from 'views/detail/childComps/DetailSwiper'
  import DetailBaseInfo from 'views/detail/childComps/DetailBaseInfo'

  import Scroll from '../../components/common/scroll/Scroll.vue'
  

  import {
    getDetail,
    Goods
  } from 'network/detail';


  /* import NavBar from 'components/common/navbar/NavBar' */
  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {}
      }
    },
    components: {
      /* NavBar */
      DetailNavbar,
      DetailSwiper,
      DetailBaseInfo,
      Scroll

    },
   
    created() {   //created替换成setup
      /* console.log(this.$route.params.iid); */
      // 1.保存传入的iid
      
      console.log('created');
      this.iid = this.$route.params.iid

      // 2.根据iid请求详细的数据
      getDetail(this.iid).then(res => {
        /*  console.log(res); */
        //1.获取顶部的图片轮播数据
        const data = res.result;
        this.topImages = res.result.itemInfo.topImages
        /* console.log(this.topImages); */

        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        console.log(data);
        console.log(this.goods);
      })
    }
  }

</script>

<style scoped>

   .detail {
       position: relative;
       z-index: 9;
       background-color: #fff;
       height: 100vh;
   }

    .detail-nav {
        position: relative;
        z-index:9;
        background-color: #fff;
    }


  .content {
    height: calc(100% - 44px);
  }

</style>
