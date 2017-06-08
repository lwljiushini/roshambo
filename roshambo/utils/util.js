/**
 * 处理具体业务逻辑
  */
function formatTime(date) {
  //获取年月日
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  //获取时分秒
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  //格式化日期
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/** 
 * 模块化到暴露接口
*/

module.exports = {
  formatTime: formatTime
}
