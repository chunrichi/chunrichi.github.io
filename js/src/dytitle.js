// 自己添加的动态title效果
// <!--崩溃欺骗-->
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = ' Σ( ° △ °|||)︴页面崩溃啦 ~ | cwyaml！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' (๑•̀ㅂ•́) ✧噫又好了~ ' + OriginTitile;
         titleTime = setTimeout(function () {
             document.title = OriginTitile;
         }, 2000);
     }
});