

(function($){

  var winW = $(window).outerWidth();
  var iconText = $('.icon_text');
  var search = $('.search_area');

  if(winW > 0){
    iconText.on('click',function(e){
    search.stop().fadeToggle();
    $(this).children('button').toggleClass('active')
    });
  }


//======================================
  // var winW = $(window).outerWidth();

  $(window).on('resize',function(e) {
    var nowW = $(window).outerWidth();
    if (winW !== nowW) {
      location.reload();
    }
  });

  var gnbBtn = $('.gnb_btn');
  var gnb = $('.gnb_area');

  if(winW < 480){
    gnbBtn.on('click',function(e){
    gnb.stop().fadeToggle();
    $(this).children('button').toggleClass('active')
    });
  }else if(winW < 1366){
    gnbBtn.on('click',function(e){
    gnb.stop().slideToggle();
    $(this).children('button').toggleClass('active')
    });
  }


//======================================
  // jquery gnb 01 갖고옴 ===
  // var winW = $(window).outerWidth();

  // $(window).on('resize',function(e) {
  //   var nowW = $(window).outerWidth();
  //   if (winW !== nowW) {
  //     location.reload();
  //   }
  // });

  // headBox.find('ol').hide();

  // var slideshow = function(){
  // $(this).find('ol').stop().slideDown();
  // navBg.slideDown();
  // };

  // var slidehide = function(){
  // $(this).find('ol').stop().slideUp();
  // navBg.slideUp();
  // };

  // headBox.on('mouseenter',function() { slideshow(); })
  //        .on('mouseleave',function() { slidehide(); });

  // var gnb = $('#gnb');
  // var gnbula = gnb.children('ul').children('li').children('a');
  // var gnbollasta = gnb.find('ol').find('li').eq(-1).find('a')


  // gnbula.on('focus',function() { slideshow(); }); 
  // gnbollasta.on('blur',function() { slidehide(); });

  // ====================================================
  // .accordion 아코디언 세로형이지만 갖고옴 ===
  var cate = $('.category');
  var menu = cate.find('li');

  var timed = 500;
  var beforeColor ='#067';
  var afterColor = '#047';
  
  // menu.nextAll().hide();

  // dt 클릭시 형제 dd를 보이게 만들기
  menu.on('click',function(e) {
    e.preventDefault();
    var menuli = $(this);

    // step_04 열렸을경우 클릭시 다시 사라지게
    menuli.parent().siblings('ul').children('li').slideUp(timed);
    // 현재 선택하는 dt의 뒤의 dd가 열렸는가?
    var thisNext =  munuli.nextAll().css('display');
    console.log(thisNext);

    if(thisNext === 'block') {
      menuli.nextAll().slideUp(timed);
    } else {
      menuli.nextAll().slideDown(timed);
    }
  });
})(jQuery);