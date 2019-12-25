var htmlDom = document.getElementsByTagName('html')[0];
    function newBase(){
      var htmlWidth = document.documentElement.clientWidth || document.body.clientWidth
      htmlDom.style.fontSize = htmlWidth / 10 + 'px'
      localStorage['w'] = htmlWidth / 10
      }
      newBase()
      window.addEventListener('resize',newBase)