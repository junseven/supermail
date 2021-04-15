<template>
  <div class="tabControl">
    <div
      class="tabItem"
      v-for="(item, index) in title"
      :key="index"
      @click="tabClick(index)"
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
  methods:{
    tabClick(index){
      this.activeItem = index
      this.$emit("tabClick",index)
    }
  },
};
</script>

<style scoped >
.tabControl {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;


}
.tabItem {
  flex: 1;

}
.tabItem span {
  padding: 5px;
  letter-spacing:10px;
}
.tabItem span:hover{
  color: red;
  cursor:pointer 
}
.isAcitve {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-tint);
}
</style>
