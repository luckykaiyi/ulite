//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    topics: []
  },
  onLoad: function () {
    this.getTopics();
  },
  getTopics: function() {
    var self = this;
    wx.request({
      url: 'https://youdingyue.luckykaiyi.com/topic',
      success: function (res) {
        var topics = res.data.filter(function(item) {
          return item.total > 0;
        }).sort(function (a, b) {
          return b.total - a.total;
        });
        self.setData({
          topics: topics
        })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '邮订阅',
      path: '/pages/index/index'
    }
  }
})
