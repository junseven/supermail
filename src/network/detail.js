import {request} from './request'
export function getDetail(){
  return request({
    url:'/detail',
    params:{
      lid
    }
  })
}

export class Goods{
  constructor(itemInfo,columns,servics){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discpunt = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop{
  constructor(shopInfo){
    this.logo = showInfo.shopLogo;
    this.name = showInfo.name;
    this.fans = showInfo.sFans;
    this.sells = showInfo.sSells;
    this.score = showInfo.score;
    this.goodsCount = showInfo.cGoods;
  }
}