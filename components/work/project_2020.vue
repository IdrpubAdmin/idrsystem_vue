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

</div>
</template>

<script>
const worksData = [
    {
        num : 'works_2020_01',
        pc : 'glyde/works_img.png', 
        mo : 'glyde/works_img.png', 
        logo : 'glyde/works_logo.svg', 
        w : 'width:76px', 
        date : '2019.11 ~ 2020.06', 
        title : `하림그룹의 신제조 및 신유통
                <br>개념이 결합된 온라인 커머스
                <br class="only_m">사업`,
        txt : '글라이드쇼핑몰 구축(식품 전문 쇼핑몰 구축)',
        content: [{
                list : [
                    {li : 'Spring boot 기반의 시스템 구축으로 Cloud 환경에 배포 및 확장이 용이한 시스템 구축'}, 
                    {li : 'Vue.js를 사용하여 사용자 UI/UX 개선'}
                ]
            }
        ]
    },
    {
        num : 'works_2020_02',
        pc : 'lotteon/works_img.png', 
        mo : 'lotteon/works_img.png', 
        logo : 'lotteon/works_logo.png', 
        w : 'width:48px', 
        date : '2019.11 ~ 2020.04', 
        title : `롯데그룹의 유통계열사 7개 통합
                <br>통합 쇼핑몰 구축에 참여`,
        txt : '롯데온 프리미엄몰 구축', 
        content: [{
                list : [
                    {li : '롯데온 (www.lotteon.com) 프리미엄몰 구축'}, 
                    {li : '전시 (Front / Backoffice) 구축'}
                ]
            }
        ]
    },
    {
        num : 'works_2020_03',
        pc : 'hyundai_greating/works_img.png', 
        mo : 'hyundai_greating/works_img.png', 
        logo : 'hyundai_greating/works_logo.png', 
        w : 'width:118px', 
        date : '2020.06 ~ 2020.12', 
        title : `현대그린푸드
                <br>그리팅몰 기능개선 완료`,
        txt : '현대그린푸드의 그리팅 기능개선', 
        content: [{
                list : [
                    {li : '현대그린푸드 신사업 온라인몰(Greating)기능개선'}, 
                    {li : '생산관리 시스템 등 유관 시스템 및 서비스연동'}
                ]
            }
        ]
    }
];

module.exports = {
    data() {
        return {
            list : worksData
        }
    },
}
</script>