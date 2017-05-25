//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    projectArr: [1,2,3,6,5,4,7,8],
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
      console.log(that.data.userInfo)
    })
  },
  addimagecliock:function(){
    wx.chooseImage({
      success: function(res) {

      },
    })
  }
})
