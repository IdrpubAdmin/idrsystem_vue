"use strict";

/**
 * Style Methods
 */
function getBodyScrollTop() {
  var el = document.scrollingElement || document.documentElement; // return el.scrollTop;

  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop); // 가장큰 숫자 반환 (y축 방향으로 스크롤한 거리들 크로스브라우징용)
} // STYLE COMMON API


var StyleCommon = StyleCommon || {};

StyleCommon = function (doc, global) {
  // PRIVATE VARIABLE
  var obj = {}; // PRIVATE METHOD

  function preventDefault(_evt) {
    if (_evt.cancelable) {
      _evt.preventDefault();
    }
  }

  function preventMomentumScroll(_el) {
    var scrollTop = _el.scrollTop,
        offsetHeight = _el.offsetHeight,
        scrollHeight = _el.scrollHeight;

    if (scrollTop == 0) {
      _el.scrollTo(0, 1);

      return true;
    }

    if (scrollTop + offsetHeight >= scrollHeight) {
      _el.scrollTo(0, scrollHeight - offsetHeight - 1);

      return true;
    }

    return false;
  } // PUBLIC METHOD


  obj.scrollLock = function (_flag) {
    if (_flag) {
      doc.querySelector('body').classList.add('body_hold');
    } else {
      doc.querySelector('body').classList.remove('body_hold');
    }

    ['scroll', 'touchmove', 'mousewheel'].forEach(function (_evtNm) {
      if (_flag) window.addEventListener(_evtNm, preventDefault, {
        passive: false
      });else window.removeEventListener(_evtNm, preventDefault);
    });
  };

  obj.forceScroller = function (_el) {
    _el.onscroll = function (_evt) {
      preventMomentumScroll(_evt.currentTarget);
    };

    _el.ontouchmove = function (_evt) {
      if (!preventMomentumScroll(_evt.currentTarget) && _evt.cancelable) {
        _evt.stopPropagation();
      }
    };

    _el.onmousewheel = function (_evt) {
      if (!preventMomentumScroll(_evt.currentTarget)) {
        _evt.stopPropagation();
      }
    };
  };

  obj.scrollToSmooth = function (_top) {
    var headerHeight = doc.querySelector('.header-wrap') ? doc.querySelector('.header-wrap').offsetHeight : 0;
    window.scrollTo({
      top: _top - headerHeight,
      behavior: 'smooth'
    });
  };

  obj.animateScrollTo = function (_selector, _duration, _adjust) {
    _duration = 400; //이동시간

    _adjust = 60; //조정값

    var targetEle = document.querySelector(_selector);

    if (!targetEle) {
      return;
    } // - Get current & target positions


    var scrollEle = document.documentElement || window.scrollingElement,
        currentY = scrollEle.scrollTop,
        targetY = targetEle.offsetTop - (_adjust || 0);
    animateScroll(currentY, targetY, _duration); // - Animate and scroll to target position

    function animateScroll(_startY, _endY, _duration) {
      _duration = _duration ? _duration : 600;
      var unitY = (targetY - currentY) / _duration;
      var startTime = new Date().getTime();

      var endTime = new Date().getTime() + _duration;

      var scrollTo = function scrollTo() {
        var now = new Date().getTime();
        var passed = now - startTime;

        if (now <= endTime) {
          scrollEle.scrollTop = currentY + unitY * passed;
          requestAnimationFrame(scrollTo);
        } else {
          console.log('End off.');
        }
      };

      requestAnimationFrame(scrollTo);
    }

    ;
  };

  obj.updateDocTitle = function (txtTit) {
    // html title 변경하는 함수 (html에서 값 받아옴 (ex: 이랜드 신규브랜드 콸콸 구축 및 운영))
    if (txtTit) {
      var tempTit = document.title; // 원래 title명

      document.title = txtTit + " | " + tempTit; // title을 받아온값 | 원래타이틀 으로 변경
    }
  };

  return obj;
}(document, window); // LAYOUT COMMON MOVEMENT


var Wrapper = Wrapper || {};

Wrapper = function (doc, global) {
  //doc = #document, global = window
  // ELEMENTS INITIALIZE
  var obj = {},
      header = {
    _that: doc.querySelector('#header'),
    _back: null,
    _backBtnHandler: backBtnHandler,
    _topLogo: doc.querySelector('.header_logo'),
    _topLogoBtnHandler: null,
    _gnbBtn: doc.querySelector('.gnb_btn'),
    _gnbBtnHandler: null,
    _close: null,
    _closeBtnHandler: closeBtnHandler,
    _load: {
      _that: null,
      _timer: null
    }
  },
      body = doc.querySelector('body'),
      scroller = doc.querySelector('html'),
      wrapper = doc.querySelector('#wrapper'),
      container = doc.querySelector('#container'),
      beforeTop = 0,
      lastScroll = 0,
      bodyHeight = body.offsetHeight,
      scollerGestureCallback; // PRIVATE FUNCTIONS

  function initialize() {
    // initialize() 윈도우 스크롤, 로드되면 wrapperHandler실행
    global.addEventListener('scroll', wrapperHandler, false);
    global.addEventListener('load', wrapperHandler, false); // orientationchange 윈도우 가로/세로로 회전할때, 바디가 로드될때 orientationChangeHandler실행

    global.addEventListener('orientationchange', orientationChangeHandler, true);
    body.addEventListener('load', orientationChangeHandler, true);

    if (header) {
      if (header._topLogo) {
        // 로고
        header._topLogo.addEventListener('click', topLogoBtnHandler, true); // 로고 클릭시 topLogoBtnHandler 실행

      }

      if (header._gnbBtn) {
        // 햄버거 버튼
        header._gnbBtn.addEventListener('click', gnbBtnHandler); // 햄버거버튼 클릭시 gnbBtnHandler 실행

      }
    }
  } // (윈도우 스크롤, 로드되면) - 헤더 이벤트 (제일 처음에만 발동되고 top으로 올라와야 끝남)


  function wrapperHandler(_evt) {
    if (getBodyScrollTop() > beforeTop && getBodyScrollTop() > 0) {
      // UP GESTURE // 만약 스크롤한 값이 beforeTop(초기값 0)보다 크고 스크롤한 값이 0이상이라면
      // if(scroller.scrollTop > 0 && !doc.querySelector('#header').classList.contains('fixed')){ // ADD HEADER FIXED
      if (getBodyScrollTop() > 0 && !doc.querySelector('#header').classList.contains('fixed')) {
        // ADD HEADER FIXED // 만약 스크롤한 값이 0보다크고 헤더의 class가 fixed가 아니면 (스크롤 중이면)
        doc.querySelector('#header').classList.add('fixed'); // 헤더에 class fixed줌
        //doc.querySelector('#wrapper').style.paddingTop = doc.querySelector('#header').clientHeight + 'px';
      }

      if (scollerGestureCallback) scollerGestureCallback('UP', scroller);
    } else {
      // DOWN GESTURE
      // if(scroller.scrollTop == 0 && doc.querySelector('#header').classList.contains('fixed')){ // ON TOP SCROLL POSITION REMOVE HEADER FIXED
      if (getBodyScrollTop() == 0 && doc.querySelector('#header').classList.contains('fixed')) {
        // ON TOP SCROLL POSITION REMOVE HEADER FIXED //스크롤한 값이 0이고 헤더의 class가 fixed라면 (스크롤하다가 top으로 왔을때)
        doc.querySelector('#header').classList.remove('fixed'); //헤더에 fixed를 지우고

        doc.querySelector('#wrapper').style.paddingTop = '0px'; //랩에 스타일을줌
      }

      if (scollerGestureCallback) scollerGestureCallback('DOWN', scroller);
    } // if(!mainScrollDisabled) beforeTop = scroller.scrollTop;
    // beforeTop = scroller.scrollTop;


    beforeTop = getBodyScrollTop(); //스크롤 값을 beforeTop에저장
  }

  obj.wrapperHandler = wrapperHandler; // (윈도우 가로/세로로 회전할때, 바디가 로드될때) - 가로모드일때 발동되는 이벤트 (class(.lands) 정해둔것이 없음)

  function orientationChangeHandler() {
    setTimeout(function () {
      if (body.offsetHeight < body.offsetWidth) {
        // LANDSCAPE 바디높이보가 바디너비가 클때 (가로모드)
        body.classList.add('lands'); // 바디 class에 lands줌
      } else {
        // PORTRATE
        body.classList.remove('lands'); // 아닐때 지움
      }
    }, 100);
  } // 로고 클릭시 발동될 이벤트


  function topLogoBtnHandler(_evt) {} //gnb_btn click function 햄버거버튼 클릭시 발동


  function gnbBtnHandler(_evt) {
    var gnbWrap = doc.querySelector('.gnb_wrap'); // GNB모달

    if (gnbWrap.classList.contains('on')) {
      // GNB가 켜져있을때
      header._that.classList.remove('gnb_on'); //#header에 gnb_on을지움


      gnbWrap.classList.remove('on'); // GNB 끔

      header._gnbBtn.classList.remove('on'); // 햄버거버튼 on 지움


      StyleCommon.scrollLock(false); // 마우스 스크롤 발생하게함
    } else {
      header._that.classList.add('gnb_on');

      gnbWrap.classList.add('on');

      header._gnbBtn.classList.add('on');

      StyleCommon.scrollLock(true);
    }
  }

  function backBtnHandler(_evt) {
    global.history.back(); // 뒤로가기
  }

  function closeBtnHandler(_evt) {
    global.history.back(); // 뒤로가기
  } // VALIDATION


  if (doc.querySelector('#header') && wrapper) setTimeout(initialize, 0);
  return obj;
}(document, window); // WorksNav


var WorksNav = WorksNav || {};

WorksNav = function (doc, global) {
  // ELEMENTS INITIALIZE
  var obj = {},
      body = doc.querySelector('body'),
      container = doc.querySelector('#container'),
      gnbD1 = doc.querySelector('.gnb_menu'),
      // gnb 모달
  lnbD1 = doc.querySelector('.lnb_d1_wrap'); // lnb1 (ul)

  function vdrawLnbNa() {
    //handlebars draw drawLnbNa() 핸들바 문법
    //reference
    var hndBrWrap = $(".lnb_d1_wrap"); // lnb1 (ul)

    var hndBrSource = $("#drawLnbNavTmp").html(); // 핸들바 템플릿 가져오기

    var hndBrCompileTemp = Handlebars.compile(hndBrSource); // 핸들바 템플릿 컴파일

    hndBrWrap.empty().html(hndBrCompileTemp(lnbInfoData)); // 바인딩해서 html 생성
  } // PRIVATE FUNCTIONS


  function initialize() {
    // 위에 이니셜라이즈 함수 실행되면
    container.classList.add('has_wnd_nav'); // 컨테이너에 .has_wnd_nav추가 (컨테이너 색상 맞춰주는 class)

    gnbD1.classList.add('has_wnd_nav'); // gnb 모달에 .has_wnd_nav추가 (모바일에서 레이아웃 맞춰주는 class)

    drawLnbNav(); //from lnb_data_works.js // drawLnbNav() 실행
  } // (보고있는 페이지에 파란색 선 붙이는 함수)


  obj.checkCurrentLnbNav = function (gnb, lnb1, lnb2) {
    // gnb - 보고있는 페이지 들의 gnb위치 (ex: service 1 works 2 contact 3), lnb1 - lnb위치(ex: 2021 1 2020 2 ...) , lnb2 - lnb2위치
    setTimeout(function () {
      // 존재하는 함수의 매개변수로 넘어온 값들을 배열로 변환한다(gnb모달의 li - gnb메뉴)
      Array.prototype.slice.call(gnbD1.querySelectorAll('li')).forEach(function (_el, _idx) {
        var tempTxt1 = _el.querySelector('a').getAttribute('data-menu-id'); // tempTxt1 = gnb메뉴의 a의 data-menu-id값


        if (tempTxt1 === gnb) {
          // data-menu-id값이 보고있는 페이지 들의 gnb위치와 일치할때 (현재 위치한 페이지와 gnb메뉴의 값이 일치할때)
          _el.classList.add('on'); // a에 class on을 추가 (파란색선)

        }
      }); // lnb메뉴

      Array.prototype.slice.call(lnbD1.querySelectorAll('.d1_li')).forEach(function (_el1, _idx1) {
        var tempTxt1 = _el1.querySelector('a').getAttribute('data-menu-id');

        if (tempTxt1 === lnb1) {
          // data-menu-id값이 보고있는 페이지 들의 lnb위치와 일치할때 (현재 위치한 페이지와 lnb메뉴의 값이 일치할때)
          _el1.classList.add('on');
        }

        var lnbD2 = _el1.querySelector('.lnb_d2_wrap'); // lnb메뉴의 lnb(ex: works 2021의 "1 2 3 4")


        if (lnbD2) {
          lnbD2.querySelectorAll('.d2_li').forEach(function (_el2, _idx2) {
            // lnb2 들
            var tempTxt2 = _el2.querySelector('a').getAttribute('data-menu-id');

            if (tempTxt2 === lnb2 && _el1.classList.contains('on')) {
              // data-menu-id값이 보고있는 페이지와 같고 lnb값이 on일때 (보고있지 않은 다른연도에 on 붙는걸 방지)
              _el2.classList.add('on');
            }
          });
        }
      });
    }, 100);
  }; // VALIDATION


  if (doc.querySelector('.lnb_d1_wrap')) setTimeout(initialize, 0);
  return obj;
}(document, window);