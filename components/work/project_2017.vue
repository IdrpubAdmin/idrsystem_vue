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
        num : 'works_2017_01',
        pc : 'civilpension/works_img.png', 
        mo : 'civilpension/works_img.png', 
        logo : 'civilpension/works_logo.png', 
        w : 'width:64px', 
        date : '2017.08 ~ 2017.11', 
        title : `공무원연금공단
                <br>제휴복지몰`,
        txt : '제휴복지몰 구축',
        content : [{
                subTxt : 'Front', 
                list : [
                    {li : '메인 디자인 및 메뉴체계 개선'},
                    {li : '반응형 시스템 구현(PC/Mobile)'},
                    {li : 'PC,Mobile 기기별로 다른 컨텐츠를 노출할 수 있도록 구성'}
                ]
            },{
                subTxt : 'Admin',
                list : [
                    {li : '제휴업체 및 제휴카드 매출실적관리 구축'},
                    {li : '실시간으로 메뉴구조를 변경할 수 있도록  메뉴관리 기능 추가'},
                    {li : '배너별 단가관리 기능 구축'}
                ]
            },{
                subTxt : '제휴업체 SSO 연동',
                list : [
                    {li : '100여개의 제휴업체와 로그인 연동을 할 수 있도록 구현'},
                    {li : '제휴업체의 개발언어에 따라 다른 연동모듈 제공'}
                ]
            }
        ]
    },
    {
        num : 'works_2017_02',
        pc : 'hyundaimall/works_img.png', 
        mo : 'hyundaimall/works_img.png', 
        logo : 'hyundaimall/works_logo.png', 
        w : 'width:136px', 
        date : '2017.03 ~ 2017.11', 
        title : '현대백화점<br>H&M Brand Mall',
        txt : 'H&M COS / &OtherStories 한국대표몰 구축',
        content : [{
                subTxt : 'Front 오피셜', 
                list : [
                    {li : 'Main/상품리스트/상품상세 및 기타 컨텐츠 페이지 Global Guide 적용'},
                    {li : '반응형 시스템 구현(PC/Tablet/Mobile)'},
                    {li : '회원, 주문/결제 및 마이페이지는 한국법 제도에 맞춰 로컬라이제이션 진행'}
                ]
            },{
                subTxt : 'Front 샵인샵',
                list : [
                    {li : `더현대 사이트 내에서 Main/상품 리스트/상품상세 및 컨텐츠 페이지는 오피셜 
                          <br class="only_pc">사이트와 동일한 Global Guide 적용`},
                    {li : '회원, 주문, 마이페이지는 더현대닷컴 사용'}
                ]
            },{
                subTxt : 'Admin',
                list : [
                    {li : '더현대닷컴 기존 Admin 기반으로 구축'},
                    {li : `H&M 전용 Admin 구현
                          <br>* 상품관리, 재고관리, 프로모션관리, 매장관리, 전시관리, 기획전관리, 매거진관리, Sales Report 등`}
                ]
            },{
                subTxt : '물류 API 연동',
                list : [
                    {li : 'H&M Global 물류대행업체인 Li&Pung과 출고,회수,취소 및 재고 연동 구현'}
                ]
            }
        ]
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