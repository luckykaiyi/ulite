//list.js
//获取应用实例
var app = getApp()
Page({
  data: {
    topic: null
  },
  onLoad: function (options) {
    this.id = options.id;
    this.getTopic();
  },
  getTopic: function() {
    var self = this;
    wx.request({
      url: 'https://youdingyue.luckykaiyi.com/topic/' + self.id,
      success: function (res) {
        self.setData({
          topic: res.data
        })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '邮订阅',
      path: '/pages/list/list?id=' + this.id
    }
  }
})
