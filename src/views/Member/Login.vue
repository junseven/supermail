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
          @click="login"
        >
          登录
        </v-btn>

        <v-btn
          color="accent"
          class="mr-4"
          @click="reset"
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
      passwordRules: [
        v => !!v || '请输入密码',
      ],
    }),
    computed:{
       model(){
         return {
        username:this.account,
        password:this.password}
      }
    },
    methods: {
      login () {
        if(this.$refs.form.validate()){
          this.$axios.get('/api/login',{params: this.model}).then(res=>{
            const result = res.data
            if(result.code==0){
              this.$store.commit('setToken',result.token)
              window.localStorage.setItem('token',result.token)
              alert(result.message)
            }else{
              alert(result.message)
            }
          })
        }
      },
      reset () {
        this.$router.push('/register')
      },
    },
  }
</script>
<style scoped >
  
</style>
