(function($){

  // === adBox 자동 슬라이드 배너 ===

  var adWrap = $('.ad_wrap')
  var adUl = adWrap.children('ul');

  var bannerLi = adUl.children('li');
  var bannerLength = bannerLi.length;
  adUl.css({width:bannerLength * 100 + '%'});
  console.log(bannerLength);

  var i = 0;
  var adBanner = function(i){
    //배너의 갯수를 파악해서 끝으로 오면 처음으로 이동

    // 배너 li의 가로값만큼씩 -(왼쪽)으로 이동
    var num = -bannerLi.width();
      adUl.stop().animate({marginLeft:num},function(){
        bannerLi.eq(0).appendTo(adUl);
        adUl.stop().css({marginLeft:0});
        bannerLi = adUl.children('li');
      });
  };

  // 일정시간마다 자동 슬라이드 
  // setInterval, clearInterval
  var timed = 2500;
  var autoStart;

  var startSlide = function(){
    autoStart = setInterval(function(){
      (i < bannerLength-1) ? i+=1 : i=1;
      adBanner(i); 
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