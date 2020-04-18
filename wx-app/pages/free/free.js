// pages/free/free.js
Page({
  data:{
    level:'',
    isCharging:false,
    pic:[]
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  abc:function(){
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  getRe:function(){
    let that = this
    wx.getBatteryInfo({
      success: function (res) {
        that.setData({ level: res.level, isCharging: res.isCharging})
      }
    })
  },
  openPhoto:function(){
    let that = this
    wx.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        let fileSrc = res.tempFilePaths
        that.setData({ pic: [...fileSrc] })
      }
    })
    
  }
})