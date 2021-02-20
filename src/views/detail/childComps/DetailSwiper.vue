<template>

  <swiper class="swiper-item">
      <SwiperItem v-for="item in dtopImages" :key="item"  > 
          <img :src="item" alt="" class="test">
      </SwiperItem>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'


export default {
    name:"DetailSwiper",
    components:{
        Swiper,
        SwiperItem
        
    },
    props:{
        dtopImages: {
            type:Array,
            default(){
                return []
            }
        }
    },
    


}
</script>

<style scoped>
.swiper-item {
   height: 300px;
   overflow: hidden;
    
}

.test {
    width: 100%;
} 

</style>