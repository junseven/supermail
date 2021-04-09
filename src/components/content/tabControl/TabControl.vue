<template>
  <div class="tabControl">
    <div
      class="tabItem"
      v-for="(item, index) in title"
      :key="index"
      @click="activeItem = index"
    >
      <span :class="index == activeItem ? 'isAcitve' : ''">{{ item }}</span>
    </div>
  </div>
</template>
<script >
export default {
  name: "",
  data() {
    return {
      activeItem: 0,
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped >
.tabControl {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
}
.tabItem {
  flex: 1;
}
.tabItem span {
  padding: 5px;
}
.isAcitve {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
</style>
