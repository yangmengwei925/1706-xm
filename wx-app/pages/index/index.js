// page/index/index.js
Page({

  data: {
    defaultIndex:0,
    titleBar: ['二手','旧手机','旧卷','旧书']
  },
  changedeIndex:function(e){
    const { ind } = e.currentTarget.dataset
    this.setData({ defaultIndex: ind})
  }
})