// pages/edit/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coverimage: null,
    coverTitle: '未命名标题',
    isshowbtn: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.imageURL)
    // 解析出来对象
    var obj = JSON.parse(options.imageURL)
    console.log(obj)
    var that = this
    that.setData({
      coverimage: obj[0].path,
    })
  },
  edittext: function () {
    wx.navigateTo({
      url: '../edittext/edittext',
    })
  },
  addimage: function () {
    if (this.data.isshowbtn == true){
      this.setData({
        isshowbtn: false,
      })
    }else{
      this.setData({
        isshowbtn: true,
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this
    if (wx.getStorageSync("titletext").length != 0) {
      that.setData({
        coverTitle: wx.getStorageSync("titletext")
      })
      wx.removeStorageSync("titletext")
    } else {

    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})