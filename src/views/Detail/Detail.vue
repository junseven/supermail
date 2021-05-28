<template>
  <div>
    <detail-nav></detail-nav>
  </div> 
</template>
<script >
import DetailNav from './childDetail/DetailNav.vue';
  
  export default {
    name: '', 
    data()  {
      return{
        iid:null
      }
    },
    created(){
      this.iid = this.$route.params.iid
      console.log(this.iid);
      console.log(this.$route);
    },
    components: {
        DetailNav

    }
  }
</script>

<style scoped >
  
</style>
