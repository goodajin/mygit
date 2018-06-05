//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    "adContents":{
      "imgUrls":[
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524807676052&di=a959d3c83ebb373b5963711d4a17f53a&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20160522%2Ftooopen_sy_163090978428.jpg"
      ],
      indicatorDots:true,
      autoplay:true,
      interval:2000,
      duration:1000,
    },
    "menusContents":{
      menusImg: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524807676052&di=a959d3c83ebb373b5963711d4a17f53a&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fimages%2F20160522%2Ftooopen_sy_163090978428.jpg"],
      menusTitle:["新品","人气","促销","推荐"]
    },
    
    goodsImgUrl: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
    goodsBigImgUrl: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg']
  
  },
  onSwiperClick:function(e){
    var pId = e.target.dataset.postid;
    console.log(e);
    console.log(pId);
  },
  onMenuClick:function(e){
    console.log(e);
    console.log(e.target.dataset.postid);
    wx.navigateTo({
      url: '/pages/goodsDetail/goodsDetail',
    })
  },

  onLoad:function(){
    
  }
})
