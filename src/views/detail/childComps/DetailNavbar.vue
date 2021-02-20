<template>
  <div id="detail">
    <NavBar>
    <template v-slot:left >
        <div class="back" @click="returnClick">
        <img src="~assets/images/common/back.svg" alt="" >
        </div>
    </template>
      <template v-slot:center class="title">
        <div class="title">
          <div v-for="(item,index) in titles" :key="item" class="title-item" :class="{active: currentIndex === index}" @click="titleClick(index)">
            {{item}}</div>
        </div>
      </template>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar"
  export default {
    name: 'DetailNavbar',
    components: {
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods:{
        titleClick(index){
            this.currentIndex = index
        },
        returnClick () {
            this.$router.go(-1)
        }
    }
  }

</script>

<style scoped>
  .title {
    display: flex;
    font-size: 13px;
  }

  .title-item {
    flex: 1
  }

  .active {
    color: var(--color-high-text)
  }
 
  .back img {
      margin-top: 10px;
  }

</style>
