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
    }
  },
  //微信登录事件
  weixinlogin: function () {
    var that = this
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
  },
  //添加图片
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
