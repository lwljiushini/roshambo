//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Welcome to my home',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
    wx.showModal({
    title: '提示',
    content: '这是一个测试弹窗',
    confirmText: "yes",
    cancelText: "no",
    showCancel: false,
    success: function (res) {
      if (res.confirm) {
          //弹出一个提示框
        }
      }
    })
  },
  onLoad: function () {
    console.log('onLoad');
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  /**
  *    监听页面显示，
  *    当从当前页面调转到另一个页面
  *    另一个页面销毁时会再次执行
  */
  onShow: function() {
    	console.log('index---------onShow()');
  },
  /**
  *    监听页面渲染完成
  *    完成之后不会在执行
  */
  onReady: function() {
    	console.log('index---------onReaday()');
  },
  /**
  *    监听页面隐藏
  *    当前页面调到另一个页面时会执行
  */
  onHide: function() {
    	console.log('index---------onHide()');
  },
  /**
  *    当页面销毁时调用
  */
  onUnload: function() {
    	console.log('index---------onUnload');
  }
});
