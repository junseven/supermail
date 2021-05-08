<template>
  <div>

  </div> 
</template>
<script >
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

    }
  }
</script>

<style scoped >
  
</style>
