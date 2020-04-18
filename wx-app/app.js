
App({
 //启动小程序
onLaunch:function(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  
  },
  //启动完成
  onShow(options) {
    wx.showToast({
      title: 'show',
      icon: 'success',
      duration: 2000
    })
  },
  //退出又重新进入（从后台切到前台
  onHide() {
    wx.showToast({
      title: 'hide',
      icon: 'success',
      duration: 2000
    })
  }
})