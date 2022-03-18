// 문서 내용이 로드되면 할일
document.addEventListener('DOMContentLoaded', function() {
	var menu = document.querySelectorAll('.header_logo');
    console.log(menu)

	var contents = document.querySelectorAll('#contents section');
    console.log(contents)
	var lastPos = 0;
	// 메뉴를 클릭하면 할일
	for (var i = 0; i < menu.length; i++){
	  menu[i].addEventListener('click', function(ev){
		ev.preventDefault();
		var idx = this.getAttribute('data-num');
		var tt = contents[idx].offsetTop;

    console.log(idx)
  
		// 해당위치로 그냥 이동
		// window.scroll(0, tt); // 절대값
		// window.scrollTo(0, tt); // 절대값
		// window.scrollBy(x, y); // 현재 위치에서 그 위치로 이동 (상대값)
		// 대상위치로 그냥 이동
		// contents[idx].scrollIntoView();
  
		// 일정시간마다 스크롤양 변동시켜서 위치로 이동
		var scrollInterval = setInterval(function(){
		  // 현재위치스크롤양 < tt (페이지 아래로 내려가는 경우), 현재위치스크롤양 > tt (페이지 위로 올라가는경우)
		  if (tt - window.pageYOffset > 50 || window.pageYOffset - tt > 50){
			// +값
			if (tt > lastPos){
			  window.scrollBy(0, 20);        
			} else {
			  window.scrollBy(0, -20);
			}
		  } else {
			clearInterval(scrollInterval);
			window.scrollTo(0, tt);
			lastPos = tt;
		  }
		}, 1);
	  });
	}
	window.addEventListener('scroll', function(){ 
	  var sct = this.pageYOffset; // window.scrollY
	  for (var i = 0; i < contents.length; i++){
		if (contents[i].offsetTop <= sct){
		  var idx = contents[i].getAttribute('data-num');
		  for(var a = 0; a < menu.length; a++){
			menu[a].classList.remove('on');
		  }       
		  menu[idx].classList.add('on');
		}
	  }
	});
  });