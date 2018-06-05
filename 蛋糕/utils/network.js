/**
 * url: 网络请求的连接
 * params: 请求参数
 * message: 显示信息
 * success: 成功回调函数
 * fail: 失败回调函数
 */

function requestLoading(url,method,params,message,success,fail){
  
  if(message != ''){
    wx.showLoading({
      title: message
    })
  }
  
  wx.request({
    url: url,
    data: params,
    header: { 
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: method,
    dataType: 'json',
    responseType: 'text',
    success: function(res) {
      if(message != ""){
        wx.hideLoading();
      }
      success(res);
    },
    fail: function(res) {
      if(message != ""){
        wx.hideLoading();
      }
      fail(res);
    },
    complete: function(res) {

    },
  })
}

function httpRequest(url, method, params, success, fail){
  this.requestLoading(url, method, params, "", success, fail);
}

//暴露接口以便外部能引用
module.exports = {
  requestLoading: requestLoading,
  httpRequest: httpRequest
}