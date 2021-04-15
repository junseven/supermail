import axios from 'axios'

export function request(config){

  //创建实例
  //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  const instance = axios.create({
    baseURL: "",
    timeout:5000,
  })
  instance.interceptors.request.use(config => {
    //console.log(config)
    return config
  }),err => {

  }
  instance.interceptors.response.use(res=>{
    return res.data.data
  },err=>{
  })
  return instance(config)
}