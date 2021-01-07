<template>
  <div id="nav">
    <router-view></router-view>
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