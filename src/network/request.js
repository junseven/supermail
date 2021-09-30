import axios from 'axios'

export function request(config){
  //创建实例
  //axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/hy66",
    timeout:5000,
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    //console.log(config)
    return config
  },err => {
    console.log(err)
  })
  //响应拦截
  instance.interceptors.response.use(res=>{
    //console.log(res)
    return res.data
  },err=>{
  })
  //
  return instance(config)
}