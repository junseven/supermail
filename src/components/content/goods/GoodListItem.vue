<template>
  <div class="goods-item" @click="todetail">
    <img :src="listItem.img" alt="" />
    <div class="goods-info">
      <p>{{ listItem.title }}</p>
      <span class="price">{{ listItem.price }}</span>
    </div>
  </div>
</template>
<script >
export default {
  name: "",
  data() {
    return {};
  },
  props: {
    listItem: {
      type: Object,
      default: {},
    },
  },
  methods:{
    todetail(){
      this.$router.push('/detail/'+ this.listItem.id)
      
    }
  },
  components: {},
};
</script>

<style scoped >
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
</style>
