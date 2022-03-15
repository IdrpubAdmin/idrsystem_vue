<template>
<div id="contents">

	<!-- works_box -->
    <section v-for="worksBox in list" :key="worksBox" class="works_box" :class="worksBox.c">

        <!-- works_img_wrap -->
        <div class="works_img_wrap">
            <img class="only_pc" :src="worksBox.pc" alt="사이트이미지">
            <img class="only_m" :src="worksBox.mo" alt="사이트이미지 모바일">
        </div>
        <!-- //works_img_wrap -->

        <!-- works_info_wrap -->
        <div class="works_info_wrap">
            <p class="wif_date">{{worksBox.date}}</p>
            <img class="wif_logo" :src="worksBox.logo" alt="로고" :style="worksBox.w">
            <p class="wif_subject">
                {{worksBox.txt1}}<br class="only_m">{{worksBox.txt3}}<br>{{worksBox.txt2}}<br class="only_m">{{worksBox.txt4}}
            </p>
            <div class="wif_detail">
                <p class="wifd_tit">{{worksBox.title}}</p>
                <ul class="wifd_con">
                    <li v-for="contentData in worksBox.content" :key="contentData" v-html="contentData.li"></li>
                </ul>
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
        pc : '../images/works/eland_qualqual/works_img.png', 
        mo : '../images/works/eland_qualqual/works_img.png', 
        logo : '../images/works/eland_qualqual/works_logo.png', 
        w : 'width:118px',
        c : '2021_1',
        date : '2020.11 ~ 2021.02', 
        txt1 : '이랜드 신규브랜드', 
        txt2: '콸콸 구축 및 운영', 
        txt3: '', 
        txt4: '', 
        title: '이랜드그룹의 콸콸쇼핑몰(셀러몰) 구축',
        content: [
            { li : 'MSA (Micro Service Architecture) 기반 IDR Comm’On Solution 적용 구축' }, 
            { li : '셀러들이 지인들과 공유할 상품을 서랍에 담은 후, 카카오톡을 통해 상품정보를 공유' }, 
            { li : '지인들이 공유된 상품을 주문하면 셀러들에게 인센티브를 지급' },
        ],
    },
    {
        pc : '../images/works/hyundai_arket/works_img.png', 
        mo : '../images/works/hyundai_arket/works_img_mo.png', 
        logo : '../images/works/hyundai_arket/works_logo.png', 
        w : 'width:110px', 
        c : '2021_2',
        date : '2021.05 ~ 2021.12', 
        txt1 : '현대백화점', 
        txt2: '아르켓 (ARKET) 온라인 쇼핑몰', 
        txt3: '', 
        txt4: '구축', 
        title: '글로벌 브랜드 사이트 구축',
        content : [
            { li : '더현대닷컴 Platform기반' }, 
            { li : 'ARKET Global Guide Line 준용' }, 
            { li : '물류 API연동과 더현대닷컴 ERP시스템과 연계' }
        ],
    },
    {
        pc : '../images/works/dongbanmall/works_img.png', 
        mo : '../images/works/dongbanmall/works_img_mo.png', 
        logo : '../images/works/dongbanmall/works_logo.png', 
        w : 'width:53px', 
        c : '2021_3',
        date : '2021.04 ~ 2022.02', 
        txt1 : '중소기업유통센터', 
        txt2: '‘가치삽시다’ 년간 운영', 
        txt3: '', 
        txt4: '', 
        title: '가치삽시다 - 년간 운영 계약',
        content : [
            { li : "1인 소상공인 미디어 플랫폼 '가치삽시다' 년간 운영" },
        ]
    },
    {
        pc : '../images/works/seegene/works_img.png', 
        mo : '../images/works/seegene/works_img_mo.png', 
        logo : '../images/works/seegene/works_logo.png', 
        w : 'width:164px', 
        c : '2021_4',
        date : '2021.06 ~ 2021.11', 
        txt1 : '씨젠의료재단 차세대 정보화', 
        txt2: '전략 컨설팅', 
        txt3: '시스템 구축', 
        txt4: '', 
        title: '씨젠의료재단 차세대 정보화 시스템 구축 전략 컨설팅',
        content : [
            { li : 'As-Is업무체계분석,현안분석 및 개선기회도출' }, 
            { li : 'LIS분석,LIS 개선방향 수립,차세대 LIS기본설계' }, 
        ]
    },
];

module.exports = {
    data() {
        return {
            list : worksData
        }
    },
}
</script>