var homedata = require('../../../data/homedata.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    navobj: [],
    id: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    var id = options.id || 0
    console.log(homedata.navdata)
    let arr=[];
    for (let i in homedata.navdata){
      //将数组合并
      arr = arr.concat(homedata.navdata[i].datas);
    }
    // arr=arr.filter(v=>{
    //   if (v.id == options.id){
    //     return v
    //   }
    // })
    arr = arr.filter(v => v.id == options.id&&v);
    arr=arr[0];
    console.log(arr);
    this.setData({ navobj: arr})
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