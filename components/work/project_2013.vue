<template>
<div id="contents">

	<!-- works_box -->
    <section v-for="worksBox in list" :key="worksBox" class="works_box" :class="worksBox.num">

        <!-- works_img_wrap -->
        <div class="works_img_wrap">
            <img class="only_pc" :src=" '../images/works/' + worksBox.pc" alt="사이트이미지">
            <img class="only_m" :src=" '../images/works/' + worksBox.mo" alt="사이트이미지 모바일">
        </div>
        <!-- //works_img_wrap -->

        <!-- works_info_wrap -->
        <div class="works_info_wrap">
            <p class="wif_date">{{worksBox.date}}</p>
            <img class="wif_logo" :src=" '../images/works/' + worksBox.logo" alt="로고" :style="worksBox.w">
            <p class="wif_subject" v-html="worksBox.title"></p>
            <div class="wif_detail">
                <p class="wifd_tit" v-html="worksBox.txt"></p>
                <template v-for="contentData in worksBox.content" >
                    <p class="wifd_con" :key="contentData">{{contentData.subTxt}}</p>
                    <ul class="wifd_con" :key="contentData">
                        <li v-for="listData in contentData.list" :key="listData" v-html="listData.li"></li>
                    </ul>
                </template>
            </div>
        </div>
         <!-- //works_info_wrap -->

    </section>
    <!-- works_box -->

     <section class="works_card">
			    <span class="wif_subject">삼성전자 구축사례</span>
                <span class="wif_tit">삼성전자 주요 사업실적(1/2)</span>
                    <div class="container">
                        <router-link to="/2" class="link_btn">
                            <span>다음 페이지</span>
                        </router-link>
                        <!-- <a class="link_btn" href="works_2013_02_02.html">
                            <span>다음 페이지</span>
                        </a> -->
                        <div v-for="cardBox in list2" :key="cardBox" class="card_wrap">
                            <div v-for="contentData in cardBox.content" :key="contentData" class="item" :class="contentData.color">
                                <ul>
                                    <li class="title">{{contentData.title}}</li>
                                    <li v-for="listData in contentData.list" :key="listData">{{listData.li}}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="card_wrap">
                            <div class="item color4">
                                <ul>
                                    <li class="title">2012.05 - 2013.04</li>
                                    <li>한국총괄 프리미엄</li>
                                    <li>판촉 시스템 개발/운영</li>
                                </ul>
                            </div>
                            <div class="item color4">
                                <ul>
                                    <li class="title">2012.04 -2012.08</li>
                                    <li>한국총괄 B2B거래선정보개선</li>
                                    <li>개발</li>
                                </ul>
                            </div>
                            <div class="item color4">
                                <ul>
                                    <li class="title">2012.01 - 2012.05</li>
                                    <li>삼성전자 한국총괄 프리미엄</li>
                                    <li>판촉 시스템 구축</li>
                                </ul>
                            </div>
                            <router-link to="2" class="item color0 link_card">
                                <p>다음 페이지</p>
                            </router-link>
                            <!-- <a  class="item color0 link_card" href="works_2013_02_02.html"> -->
                                <!-- <p> 다음페이지</p> -->
                            <!-- </a> -->
                        </div><!--// card_wrap-->
                    </div>
	    </section>

</div>
</template>

<script>
const cardData = [
    {
        content : [
            {
                color: 'color1', 
                title : '2016.07 -2016.10',
                list : [
                    {li : '삼성전자 G-CRM GMC 시스템'},
                    {li : '동남아총괄 확산 및'},
                    {li : '기능개선 프로젝트'}
                ]
            },
            {
                color: 'color1', 
                title : '2016.06 -2016.10',
                list : [
                    {li : '삼성전자 G-CRM'},
                    {li : '중동총괄 확산 프로젝트'},
                ]
            },
            {
                color: 'color1', 
                title : '2016.06 -2016.10',
                list : [
                    {li : '삼성전자 G-CRM'},
                {li : '동남아 확산 프로젝트'},
                ]
            },
            
        ]
    },
]
const worksData = [
    {
        num : 'works_2013_01',
        pc : 'samsung_elec_store/works_img.png', 
        mo : 'samsung_elec_store/works_img.png', 
        logo : 'samsung_elec_store/works_logo.png', 
        w : 'width:95px', 
        date : '2013', 
        title : `삼성전자 온라인스토어
				<br>멤버십`,
        txt : '삼성전자 Global e-Store 구축',
        content : [{ 
                list : [
                    {li : `삼성전자 e-Store 쇼핑몰 구축 프로젝트에 참여 하였으며 SAP Hybris 커머스
						  <br class="only_pc">솔루션을 활용하여 쇼핑몰 시스템 구축
						  <br>* 시스템 기획
						  <br>* 서비스 개발 (주문, 배송, 고객센터)SAP Hybris 솔루션을 활용하여 주문,
						  <br class="only_pc">배송, 고객센터 파트의 시스템 개발 역할을 수행`},
                    {li : `세계적인 글로벌 쇼핑몰 솔루션인 SAP Hybris 를 활용하여
						  <br class="only_pc">주문, 배송, 고객센터 파트의 시스템 설계, 프로세스 설계,
						  <br class="only_pc">시스템개발 프로젝트를 성공적으로 수행.`},
                ]
            }
        ]
    },
];
module.exports = {
    data() {
        return {
			list : worksData,
            list2 : cardData
        }
    },
}
</script>