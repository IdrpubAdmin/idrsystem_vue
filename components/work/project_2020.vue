<template>
<div id="contents">

	<!-- works_box -->
    <section v-for="worksBox in list" :key="worksBox" class="works_box">

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
                    <li>{{worksBox.li1}}</li>
                    <li>{{worksBox.li2}}</li>
                    <li>{{worksBox.li3}}</li>
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
        pc : '../images/works/glyde/works_img.png', 
        mo : '../images/works/glyde/works_img.png', 
        logo : '../images/works/glyde/works_logo.svg', 
        w : 'width:76px', 
        date : '2019.11 ~ 2020.06', 
        txt1 : '하림그룹의 신제조 및 신유통', 
        txt2: '개념이 결합된 온라인 커머스', 
        txt3: '', 
        tex4: '사업',
        title: '글라이드쇼핑몰 구축(식품 전문 쇼핑몰 구축)',
        li1 : 'Spring boot 기반의 시스템 구축으로 Cloud 환경에 배포 및 확장이 용이한 시스템 구축', 
        li2 : 'Vue.js를 사용하여 사용자 UI/UX 개선', 
    },
    {
        pc : '../images/works/lotteon/works_img.png', 
        mo : '../images/works/lotteon/works_img.png', 
        logo : '../images/works/lotteon/works_logo.png', 
        w : 'width:48px', 
        date : '2019.11 ~ 2020.04', 
        txt1 : '롯데그룹의 유통계열사 7개 통합', 
        txt2: '통합 쇼핑몰 구축에 참여', 
        txt3: '', 
        tex4: '',
        title: '롯데온 프리미엄몰 구축',
        li1 : '롯데온 (www.lotteon.com) 프리미엄몰 구축', 
        li2 : '전시 (Front / Backoffice) 구축', 
        li3 : ''
    },
    {
        pc : '../images/works/hyundai_greating/works_img.png', 
        mo : '../images/works/hyundai_greating/works_img.png', 
        logo : '', 
        w : 'width:118px', 
        date : '2020.06 ~ 2020.12', 
        txt1 : '현대그린푸드', 
        txt2: '그리팅몰 기능개선 완료', 
        txt3: '', 
        tex4: '',
        title: '현대그린푸드의 그리팅 기능개선',
        li1 : '현대그린푸드 신사업 온라인몰(Greating)기능개선', 
        li2 : '생산관리 시스템 등 유관 시스템 및 서비스연동', 
        li3 : ''
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