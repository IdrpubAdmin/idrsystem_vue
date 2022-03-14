<template>
<!-- contents | 컨텐츠영역 -->
    <div id="contents">

	    <!-- works_box -->
	    <section class="works_box">

		    <!-- works_img_wrap -->
		    <div class="works_img_wrap">
				<img src="../images/works/samsung_elec_store/works_img.png" alt="사이트이미지">
			</div>
		    <!-- //works_img_wrap -->

		    <!-- works_info_wrap -->
		    <div class="works_info_wrap">
			    <p class="wif_date">2013</p>
			    <img class="wif_logo" src="../images/works/samsung_elec_store/works_logo.png" alt="로고" style="width:95px;">
			    <p class="wif_subject">
				    삼성전자 온라인스토어<br>멤버십
			    </p>
			    <div class="wif_detail">
				    <p class="wifd_tit">삼성전자 Global e-Store 구축</p>
				    <ul class="wifd_con">
					    <li>
                            삼성전자 e-Store 쇼핑몰 구축 프로젝트에 참여 하였으며 SAP Hybris 커머스<br class="only_pc">솔루션을 활용하여 쇼핑몰 시스템 구축<br>
                            * 시스템 기획<br>
                            * 서비스 개발 (주문, 배송, 고객센터)SAP Hybris 솔루션을 활용하여 주문,<br class="only_pc">
                            배송, 고객센터 파트의 시스템 개발 역할을 수행
                        </li>
                        <li>
                            세계적인 글로벌 쇼핑몰 솔루션인 SAP Hybris 를 활용하여<br class="only_pc">
                            주문, 배송, 고객센터 파트의 시스템 설계, 프로세스 설계,<br class="only_pc">
                            시스템개발 프로젝트를 성공적으로 수행.
                        </li>
				    </ul>
			    </div>
		    </div>
		    <!-- //works_info_wrap -->

	    </section>
	    <!-- works_box -->

        <!-- works_card -->
        <router-view></router-view>
	    <!-- works_card -->
    </div>
    <!-- //contents | 컨텐츠영역 -->
</template>

<script>
module.exports = {
    data() {
        return {
        }
    },
}
</script>