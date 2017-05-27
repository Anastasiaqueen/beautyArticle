//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    projectArr: [],
    userHeadImage: null,
    userName: '',
    usersignature: '点击设置个性签名',
    userInfo: {},
    logs: []
  },
  onLoad: function () {

    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        userHeadImage: userInfo.avatarUrl,
        userName: userInfo.nickName,
      })
    })
  },
  addimagecliock: function () {
    wx.chooseImage({
      success: function (res) {
        console.log(res.tempFiles)
        wx.navigateTo({
          url: '/pages/edit/edit?imageURL=' + JSON.stringify(res.tempFiles),
        })
      },
    })
  }
})
