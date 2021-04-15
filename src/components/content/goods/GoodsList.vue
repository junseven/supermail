<template>
  <div class="goods-list">
    <good-list-item
      v-for="(item, index) in goodsList"
      :key="index"
      :listItem="item"
      class="list-item"
    />
  </div>
</template>
<script >
import GoodListItem from "./GoodListItem.vue";
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    goodsList: {
      type: Array,
      default: [],
    },
  },
  components: {
    GoodListItem,
  },
};
</script>

<style scoped >
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2px;
}
</style>
