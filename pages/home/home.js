var homedata = require('../../data/homedata.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:[],
    arr:[],
    obja:[]
    },

  //更多商品
  funmore() {
    wx.navigateTo({
      url: '../youni/youni',
    })
  },
  //底部拨打电话的函数
  callphonea(){
      wx.makePhoneCall({
        phoneNumber: '028-85241700',//电话号码
        success(){
          console.log("拨打成功")
        }
      })
  },
  callphoneb() {
    wx.makePhoneCall({
      phoneNumber: '15208226519',//电话号码
      success() {
        console.log("拨打成功")
      }
    })
  },
  //底部地图位置的获取
  fundiz() {
    wx.navigateTo({
      url: '../maps/maps',
    })
  },
  //七夕特辑详情处理
  xiangq(e){
    wx.navigateTo({
      url: '../components/homexq/homexq?id=' + e.currentTarget.dataset.id  
    })
    // console.log(e.currentTarget.dataset.id)
  },
  //导航跳转事件
  navfun(e){ 
    wx.navigateTo({
      url: '../components/navxiangq/navxiangq?id=' + e.currentTarget.dataset.id  
    })
    // console.log(e.currentTarget.dataset.id)
  },
  //展示详情页的跳转
  zhanxq(){
    url: '../components/zhanshixq/zhanshixq?id=' + e.currentTarget.dataset.id  

  },
 /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    // console.log(homedata.postList)
    this.setData({ obj: homedata.postList })
    // console.log(homedata.zhandata)
    this.setData({ arr: homedata.zhandata })
    // console.log(homedata.navdata)
    this.setData({ obja: homedata.navdata })
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
    setTimeout(function () {
       wx.stopPullDownRefresh()
    }, 2000)
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