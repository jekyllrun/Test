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

        /* 2.监听滚动的位置 */
         this.scroll.on('scroll',(position) => {
           /*  console.log(position); */
            this.$emit('scroll',position)
        })

        /* 3.监听上拉事件 */
        this.scroll.on('pullingUp',()=>{
           /*  console.log('上拉加载更多'); */
            this.$emit('pullingUp')
        })


       
       
    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll.scrollTo(x,y,time)
            
            console.log(x,y,time);
        },
        finishPullUp() {
            this.scroll.finishPullUp()
        },
        refresh() {
            this.scroll.refresh()
        }
    }
}
</script>

<style scope>

</style>