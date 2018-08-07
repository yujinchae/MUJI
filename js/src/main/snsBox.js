(function($){

  // === snsBox 자동 슬라이드 배너 ===
  
  var snsWrap = $ ('.sns_wrap');
  var snsUl = snsWrap.children('ul');
  var snsLi = snsUl.children('li');
  var snsLength = snsLi.length;
  snsUl.css({width:snsLength * 100 + '%'});
  console.log(snsLength);

  var i = 0;
  var sns = function(i){
    //배너의 갯수를 파악해서 끝으로 오면 처음으로 이동

    // 배너 li의 가로값만큼씩 -(왼쪽)으로 이동
    var num = -snsLi.width();
      snsUl.stop().animate({marginLeft:num},function(){
        snsLi.eq(0).appendTo(snsUl);
        snsUl.stop().css({marginLeft:0});
        snsLi = snsUl.children('li');
      });
  };

  // 일정시간마다 자동 슬라이드 
  // setInterval, clearInterval
  var timed = 2500;
  var autoStart;

  var startSlide = function(){
    autoStart = setInterval(function(){
      (i < snsLength-1) ? i+=1 : i=1;
      sns(i); 
    }, timed);
  };
  var stopSlide = function() {clearInterval( autoStart ); };
  
  startSlide();

  var go = function(e) {
    e.preventDefault();
    stopSlide();
    startSlide();
  };

  var stop = function(e) {
    e.preventDefault();
    stopSlide();
  };

})(jQuery);