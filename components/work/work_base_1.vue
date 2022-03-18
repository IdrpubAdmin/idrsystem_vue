<template>
<div id="contents">

	<!-- works_box -->
    <section v-for="worksBox in list" :key="worksBox" class="works_box" :class="worksBox.num">

        <!-- works_img_wrap -->
        <div class="works_img_wrap" data-aos="fade-up" data-aos-delay="400">
            <img class="only_pc" :src=" '../images/works/' + worksBox.pc" alt="사이트이미지">
            <img class="only_m" :src=" '../images/works/' + worksBox.mo" alt="사이트이미지 모바일">
        </div>
        <!-- //works_img_wrap -->

        <!-- works_info_wrap -->
        <div class="works_info_wrap" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
            <p class="wif_date">{{worksBox.date}}</p>
            <img class="wif_logo" :src=" '../images/works/' + worksBox.logo" alt="로고" :style="worksBox.w">
            <p class="wif_subject" v-html="worksBox.title"></p>
            <div class="wif_detail">
                <p class="wifd_tit" v-html="worksBox.txt"></p>
                <template v-for="contentData in worksBox.content" >
                    <p class="wifd_con" :key="contentData" >{{contentData.subTxt}}</p>
                    <ul class="wifd_con" :key="contentData">
                        <li v-for="listData in contentData.list" :key="listData" v-html="listData.li"></li>
                    </ul>
                </template>
            </div>
        </div>
         <!-- //works_info_wrap -->

    </section>
    <!-- works_box -->

</div>
</template>

<script>


module.exports = {

    data() {
        return {
             list : worksData
        }
    },
    created: function() {
        eventBus.$on('clickNav', function(subMenu){
            const num = subMenu.num // 받아온 데이터 컨텐츠 수
            var contents = document.querySelectorAll('#contents section'); // 컨텐츠 선택
	        var lastPos = 0;
            var tt = contents[subMenu.num - 1].offsetTop; // 컨텐츠 수에서 인덱스 값 구해야하니 - 1 뺀 컨텐츠의 top값 클릭한 컨텐츠의 값
            console.log(tt)
            console.log(window.pageYOffset)
            console.log(lastPos)

            var scrollInterval = setInterval(function(){
		    // 현재위치스크롤양 < tt (페이지 아래로 내려가는 경우), 현재위치스크롤양 > tt (페이지 위로 올라가는경우)
		    if (tt - window.pageYOffset > 50 || window.pageYOffset - tt > 50){
			    // +값
			    if (tt > lastPos){
			      window.scrollBy(0, 10);        
			    } else {
			      window.scrollBy(0, -10);
			    }
		    } else{
		        clearInterval(scrollInterval);
		        window.scrollTo(0, tt);
		        lastPos = tt;
		    }
		    }, 1);
        }.bind(this));
>>>>>>> ea3bb91e1798b4c800aaac5ca0c60e1246436c11
    },
}
</script>