//logs.js
var util = require('../../utils/util.js')
var app = getApp()
Page({
  data: {
    dheigth: null,
    isshowlogin: false,
    projectArr: [],
    userHeadImage: null,
    userName: '',
    usersignature: '点击设置个性签名',
    userInfo: {},
    logs: []
  },
  onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          dheigth: res.windowHeight,
        })
      },
    })

    //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   console.log(userInfo)
    // that.setData({
    //   userInfo: userInfo,
    //   userHeadImage: userInfo.avatarUrl,
    //   userName: userInfo.nickName,
    // })
    // })
  },
  onShow: function () {
    var that = this
    var userData = wx.getStorageSync('userinfo')
    console.log(userData)
    if (userData.length != 0) {
      that.setData({
        userInfo: userData,
        userHeadImage: userData.avatarUrl,
        userName: userData.nickName,
      })
    } else {
      that.setData({
        isshowlogin: true
      })
      wx.login({
        success: function (res) {
          console.log(res)
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              wx.setStorageSync('userinfo', res.userInfo)
              that.setData({
                isshowlogin: false,
                userInfo: res.userInfo,
                userHeadImage: res.userInfo.avatarUrl,
                userName: res.userInfo.nickName,
              })
            }
          })
        }
      })
    }
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
