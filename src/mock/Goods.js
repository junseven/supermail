const Mock = require('mockjs')
let goodList = {
  pop: {
    1:{
      'list|10': [{
      name: '@name',
      title: '@title(3)',
      price: '@float(0,2000,2,2)',
      img: '@dataImage(250x250,流行)'
    },]
    },
    2: {
      'list|10': [{
        name: '@name',
        title: '@title(3)',
        price: '@float(0,2000,2,2)',
        img: '@dataImage(250x250,流行)'
      },]
    },
    3: {
      'list|10': [{
        name: '@name',
        title: '@title(3)',
        price: '@float(0,2000,2,2)',
        img: '@dataImage(250x250,流行)'
      },]
    }
  },
  new:{
    1:{'list|10': [{
      name: '@name',
      title: '@title(3)',
      price: '@float(0,2000,2,2)',
      img: '@dataImage(250x250,新款)'
    }]},
    2: {
      'list|10': [{
        name: '@name',
        title: '@title(3)',
        price: '@float(0,2000,2,2)',
        img: '@dataImage(250x250,新款)'
      }]
    },
    3: {
      'list|10': [{
        name: '@name',
        title: '@title(3)',
        price: '@float(0,2000,2,2)',
        img: '@dataImage(250x250,新款)'
      }]
    }
  },
  sell:{
    1:{'list|10': [{
      name: '@name',
      title: '@title(3)',
      price: '@float(0,2000,2,2)',
      img: '@dataImage(250x250,精选)'
    }]},
    2: {
      'list|10': [{
        name: '@name',
        title: '@title(3)',
        price: '@float(0,2000,2,2)',
        img: '@dataImage(250x250,精选)'
      }]
    },
  },
}
// getList(type,page){
//   return goodList[type].filter((e,index)=>{
//     return 10(page-1)<=index<=(10*page-1)
//   })
// }
export default {
  'get|/home/data': options => {
    const params =JSON.parse(options.body)    //获取请求参数
    //console.log(getList([params.type], [params.page]));
    //console.log(goodList[params.type][params.page])
    return {
      status: 200,
      message: 'success',
      data: Mock.mock(goodList[params.type][params.page]),

    }
  }
}