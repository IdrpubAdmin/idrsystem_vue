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
                <p class="wifd_con">{{worksBox.sub1}}</p>
                <ul class="wifd_con">
                    <li>{{worksBox.li1}}</li>
                    <li>{{worksBox.li2}}</li>
                    <li>{{worksBox.li3}}</li>
                </ul>
                <p class="wifd_con">{{worksBox.sub2}}</p>
                <ul class="wifd_con">
                    <li>{{worksBox.li4}}</li>
                    <li>{{worksBox.li5}}</li>
                    <li>{{worksBox.li6}}</li>
                </ul>
                <p class="wifd_con">{{worksBox.sub3}}</p>
                <ul class="wifd_con">
                    <li>{{worksBox.li7}}</li>
                    <li>{{worksBox.li8}}</li>
                </ul>
                <p class="wifd_con">{{worksBox.sub4}}</p>
                <ul class="wifd_con">
                    <li>{{worksBox.li9}}</li>
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
        pc : '../images/works/civilpension/works_img.png', 
        mo : '../images/works/civilpension/works_img.png', 
        logo : '../images/works/civilpension/works_logo.png', 
        w : 'width:64px', 
        date : '2017.08 ~ 2017.11', 
        txt1 : '공무원연금공단', 
        txt2: '제휴복지몰', 
        txt3: '', 
        tex4: '',
        title: '제휴복지몰 구축',
        sub1 : 'Front',
        sub2 : 'Admin',
        sub3 : '제휴업체 SSO 연동',
        li1 : '메인 디자인 및 메뉴체계 개선', 
        li2 : '반응형 시스템 구현(PC/Mobile)', 
        li3 : 'PC,Mobile 기기별로 다른 컨텐츠를 노출할 수 있도록 구성',
        li4 : '제휴업체 및 제휴카드 매출실적관리 구축',
        li5 : '실시간으로 메뉴구조를 변경할 수 있도록  메뉴관리 기능 추가',
        li6 : '배너별 단가관리 기능 구축',
        li7 : '100여개의 제휴업체와 로그인 연동을 할 수 있도록 구현',
        li8 : '제휴업체의 개발언어에 따라 다른 연동모듈 제공'
    },
    {
        pc : '../images/works/hyundaimall/works_img.png', 
        mo : '../images/works/hyundaimall/works_img.png', 
        logo : '../images/works/hyundaimall/works_logo.png', 
        w : 'width:136px', 
        date : '2017.03 ~ 2017.11', 
        txt1 : '현대백화점', 
        txt2: 'H&M Brand Mall', 
        txt3: '', 
        tex4: '',
        title: 'H&M COS / &OtherStories 한국대표몰 구축',
        sub1 : 'Front 오피셜',
        sub2 : 'Front 샵인샵',
        sub3 : 'Admin',
        sub4 : '물류 API 연동',
        li1 : 'Main/상품리스트/상품상세 및 기타 컨텐츠 페이지 Global Guide 적용', 
        li2 : '반응형 시스템 구현(PC/Mobile)', 
        li3 : '회원, 주문/결제 및 마이페이지는 한국법 제도에 맞춰 로컬라이제이션 진행',
        li4 : '더현대 사이트 내에서 Main/상품 리스트/상품상세 및 컨텐츠 페이지는 오피셜 사이트와 동일한 Global Guide 적용',
        li5 : '회원, 주문, 마이페이지는 더현대닷컴 사용',
        li6 : '',
        li7 : '더현대닷컴 기존 Admin 기반으로 구축',
        li8 : 'H&M 전용 Admin 구현 * 상품관리, 재고관리, 프로모션관리, 매장관리, 전시관리, 기획전관리, 매거진관리, Sales Report 등',
        li9 : 'H&M Global 물류대행업체인 Li&Pung과 출고,회수,취소 및 재고 연동 구현'
    },
];

module.exports = {
    data() {
        return {
             list : worksData,
        }
    },
}
</script>