<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>

import BScroll, { PullUpLoad } from 'better-scroll'

export default {
    name:"Scroll",
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll:null,
           /*  message:'123' */
        }
    },
    mounted(){
        /* 1.创建scroll对象 */
        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probeType,  //如果都设置为3会影响性能，按需要赋值
            pullUpLoad:this.pullUpLoad //同上
            
        }) 

        /* console.log(this.scroll) */

        /* 2.监听滚动的位置 */
         this.scroll.on('scroll',(position) => {
            this.$emit('scroll',position)
        })

        /* 3.监听上拉事件 */
        this.scroll.on('pullingUp',()=>{
            this.$emit('pullingUp')
        })


       
       
    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll.scrollTo(x,y,time)
            
           /*  console.log(x,y,time); */
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll.refresh()
        },
        getScrollY () {
            return this.scroll ? this.scroll.y : 0
        }
    }
}
</script>

<style scope>

</style>