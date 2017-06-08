//导入模块化方式
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        //通过暴露的接口调用模块化方法
        return util.formatTime(new Date(log))
      })
    })
  }
})
