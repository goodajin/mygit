// pages/goodsList/goodsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav:1,
    navTopItems: [{ id: 1, title: "送爱人" }, { id: 2, title: "送长辈" }, { id: 3, title: "送小朋友" }, { id: 4, title: "朋友聚会" }, { id: 5, title: "页面加载" }, { id: 6, title: "页面加载" }, { id: 7, title: "页面加载" }],
    navBottomItems: [
      { "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', "price": "$220","title":"商品名称"},
      { "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', "price": "$220", "title": "商品名称" },
      { "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', "price": "$220", "title": "商品名称"}, 
      { "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', "price": "$220", "title": "商品名称"}, 
      { "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', "price": "$220", "title": "商品名称"}, 
      { "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', "price": "$220", "title": "商品名称"}, 
      { "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', "price": "$220", "title": "商品名称"}, 
      { "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', "price": "$220", "title": "商品名称"}, 
      { "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', "price": "$220", "title": "商品名称"}, 
      { "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', "price": "$220", "title": "商品名称"}, 
      { "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', "price": "$220", "title": "商品名称"}, 
      { "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', "price": "$220", "title": "商品名称"}, 
      { "img": 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', "price": "$220", "title": "商品名称"}]


  },

  switchTopTab:function(e){
    console.log(e);
    var id = e.target.dataset.id;
    var index = e.target.dataset.index;
    this.setData({
      curNav:id
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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