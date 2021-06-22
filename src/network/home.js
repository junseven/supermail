import { request } from './request'
import qs from 'qs';
export function getHomeMultidata() {
  return request({
    url: 'http://123.207.32.32:8000/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    //method:'get',
    params: {
      type,
      page
    },
    // headers: {
    //   'Content-Type': 'application/x-www-form-urlencoded'
    // },
  })
}
// export function getHomeGoods() {
//   return request({
//     url: '/home/data',

//   })
// }