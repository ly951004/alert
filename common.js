var base = 0
var htmlWidth
//获取Html的Dom
var htmlDom = document.getElementsByTagName('html')[0];
function fontBase(){
    htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    base = htmlWidth / 10
    htmlDom.style.fontSize= base + 'px'
}
fontBase()
window.addEventListener('resize',fontBase)

function _alert(text){
    var app = document.getElementById('app');
    var alert_box = document.createElement('article')
    alert_box.className = "flex my_alert"
    app.appendChild(alert_box)
    alert_box.innerHTML=`<p class="my_alert_content">${text}</p>`
    var timer = setTimeout(function(){
        clearTimeout(timer)
        app.removeChild(alert_box)
    },1000)
}
// 防抖
function debounce (fn) {
    let timer = null
    return function () {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, 500)
    }
  }
// 节流 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
function throttle (fn) {
    let canRun = true
    return function () {
      if (!canRun) return
      canRun = false
      setTimeout(() => {
        fn.apply(this, arguments)
        canRun = true
      }, 500)
    }
  }