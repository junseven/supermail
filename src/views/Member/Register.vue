<template>
  <v-container fluid class="mt-10">
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      fluid
    >
      <v-text-field
        name="account"
        label="账号"
        v-model="account"
        prepend-icon="mdi-account-supervisor"
        :rules="accountRules"
        required
      ></v-text-field>

      <v-text-field
        name="password"
        v-model="password"
        prepend-icon="mdi-form-textbox-password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show1?'text':'password'"
        :rules="passwordRules"
        label="密码"
        required
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-row justify="center" class="mt-3">
        <v-btn
          color="primary"
          class="mr-4"
          @click="register"
        >
          注册
        </v-btn>


      </v-row>
    </v-form>
  </v-container>
</template>
<script>
  export default {
    data: () => ({
      show1:false,
      valid: true,
      account: '',
      accountRules: [
        v => !!v || '请输入账号',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      password: '',
      repreatpassword:'',
      passwordRules: [
        v => !!v || '请输入密码',
      ],
      repeatpasswordRules: [
        v => !!v || '请输入密码',
        
      ],
    }),

    methods: {
      register () {
        this.$refs.form.validate() && this.submitDefault()
        
      },
      submitDefault(){
          //e.preventDefault();
          console.log(this.model);
          this.$axios.get('/api/register',{params:this.model}).then(res=>{
            console.log(res)
            console.log(res.data.message)
          }).catch(err=>{
            console.log(err)
          })
      }
      
    },
    computed:{
      samepassword(){
        return repreatpassword==password
      },
      model(){
        return {username:this.account,password:this.password}
      }
    }

  }
</script>
<style scoped >
  
</style>