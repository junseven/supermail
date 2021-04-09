<template>
  <div class="recommend">
    <div class="item" v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>
<script >
export default {
  name: "recommend",
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped >
.recommend {
  width: 100%;
  display: flex;
  text-align: center;
  padding: 10px 0 30px 0;
  font-size: 12px;
  border-bottom: 10px solid rgba(189, 178, 178, 0.199);
}
.item {
  flex: 1;
}
.item img {
  width: 75px;
  margin-bottom: 10px;
}
</style>
