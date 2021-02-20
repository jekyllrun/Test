

<template>
  <div id="nav">
    <router-view  v-slot="{ Component }">
      <transition name="fade">
      <keep-alive exclude="Detail">
        <component :is="Component"/>
      </keep-alive>
      </transition>
    </router-view>
    <main-tar-bar>
    </main-tar-bar>
  </div>
</template>


<script>
  import MainTarBar from 'components/contents/maintarbar/MainTarBar'
  export default {
    name: 'app',
    components: {
        MainTarBar,
    }
  }
</script>

<style scoped>
  /*css 引入方式*/
  @import "assets/css/base.css";

  .nav {
    position: relative;
  }



</style>