var homedata = require('../../../data/homedata.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navobj: [],
    id: 0
  },
  fund(e) {
    // this.setData({id:e.currentTarget.dataset.ids})
    this.func(e.currentTarget.dataset.ids)
  },
  //导航详情页跳转
  navfun(e){
    wx.navigateTo({
      url: '../navxiangqs/navxiangqs?id=' + e.currentTarget.dataset.id
    })
    // console.log(e.currentTarget.dataset.id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(homedata.navdata)
    let id = options.id || 0
    // console.log(id)
    this.func(id)
  },
  func(num) {
    if (num == 0) {
      var id = 0;  //点击的是全部
      //过滤
      var newdata = homedata.navdata.filter(v => v.datas)
      let temp = [];
      //遍历每条数据
      for (let i in newdata) {
        for (let k in newdata[i].datas) {  //取出每条数据里的datas数据
          temp.push(newdata[i].datas[k])  //将取出的每个数组里的数据存放到全部里  （temp)
        }
      }
      this.setData({ navobj: temp })
      this.setData({ id })
      // console.log(temp)
    } else {
      var id = 0;  //点击的是其他5个导航内容
      var newdata = homedata.navdata.filter(v => v.id == num && v)  //根据id进行过滤
      //v.id == num && v  箭头函数的第一个v是形参，箭头后面的v是返回值  

      id = newdata[0].id
      //  console.log(id)
      newdata = newdata[0].datas
      // console.log(newdata)
      this.setData({ id })
      this.setData({ navobj: newdata })
      // console.log({id})
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