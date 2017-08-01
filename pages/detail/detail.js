//detail.js
//获取应用实例
var app = getApp()
Page({
  data: {
    job: null
  },
  onLoad: function (options) {
    this.id = options.id;
    this.getJob();
  },
  getJob: function() {
    var self = this;
    wx.request({
      url: 'https://youdingyue.luckykaiyi.com/job/' + this.id,
      success: function (res) {
        self.setData({
          job: res.data
        })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '邮订阅',
      path: '/pages/detail/detail?id=' + this.id 
    }
  }
})
