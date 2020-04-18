// pages/goods/good.js

let Mock = require('../../mock/index.js')
Page({
  data:{
    list:[]
  },
  onLoad:function(){
    new Promise(res => res(Mock['/list/data']())).then(data=>this.setData({list:[...data]}))
  }
})