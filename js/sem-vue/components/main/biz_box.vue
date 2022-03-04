<template>
    <section class="biz_box">
		<h3 class="sec_tit">IDR 사업영역</h3>
	    <!-- Swiper -->
	    <div class="swiper-container">
		    <div class="swiper-wrapper">
			    <div class="swiper-slide" v-for="mainBiz in list" :key="mainBiz">
			    <!-- biz_item -->
				    <div class="biz_item biz_item_01">
					    <div class="visual_img">
						    <img :src="mainBiz.image" :alt="mainBiz.alt">
					    </div>
				    </div>
			    </div>
		    </div>
		    <!-- Add Pagination -->
		    <div class="swiper-pagination"></div>
	    </div>
	    <!-- //Swiper -->
	</section>
</template>

<script>
const bizData = [
	{image : '../images/main/main_swipe_img_1.png', alt : 'e-Commerce'},
	{image : '../images/main/main_swipe_img_2.png', alt : 'AI Marketing Curator'},
	{image : '../images/main/main_swipe_img_3.png', alt : 'UI/UX Design'}
];
module.exports = {
    data() {
        return {
            list : bizData
        }
    },
    mounted() {
    const swiper = new Swiper(".swiper-container", {
        slidesPerView: 1,
        autoHeight: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: true,
	    pagination: {
            el: '.swiper-pagination',
	        type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '' + '</span>';
            },
        },
    });
  },
}
</script>