<template>
  <div class="good-list">
      <GoodsListItem v-for="item in goods" :goodsItem="item" :key="item.image"/>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem"

export default {
    name:"GoodsList",
    components: {
        GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default () {
                return []
            }
        }
    }

}
</script>

<style scoped>
.good-list {
    display: flex;
    flex-wrap: wrap;
   /*  justify-content: space-around; */
    justify-content: space-evenly;
    background-color: var(--color-background);

    padding: 2px;
  }

</style>