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
        num : 'works_2019_01',
        pc : 'chilsung/works_img.png', 
        mo : 'chilsung/works_img.png', 
        logo : 'chilsung/works_logo.png', 
        w : 'width:77px', 
        date : '2019.05 ~ 2019.11', 
        title : `롯데 이커머스의 LECS 플랫폼을
                <br>기반으로 롯데칠성몰 구축참여`, 
        txt : '롯데 칠성몰 구축',
        content: [{
                list : [
                    {li : `롯데이커머스 LECS Platform 기반 식품전문
                          <br class="only_m">몰 구축`}, 
                    {li : '정기주문 / 정기배송 Process'}, 
                    {li : 'SAP ERP 주문 연계'},
                    {li : 'Fornt 주문 / 결제 및 Back Office 영역 개발'}
                ]
            }
        ]
    },
    {
        num : 'works_2019_02',
        pc : 'conran/works_img.png', 
        mo : 'conran/works_img.png', 
        logo : 'conran/works_logo.png', 
        w : 'width:163px', 
        date : '2019.05 ~ 2019.11', 
        title: `영국의 명품 가구 편집샵<br> 한국 상륙한 더콘란샵.`,
        txt : '더콘란샵 구축(영국의 명품 가구 편집샵)',
        content: [{
                list : [
                    {li : '롯데이커머스 LECS Platform 기반'}, 
                    {li : '더콘란샵 Global Guide Line 준용'}, 
                    {li : '롯데백화점 ERP 시스템과 연계'},
                    {li : '주문제작형 가구 주문 처리 구현'}
                ]
            }
        ]
    },
    {
        num : 'works_2019_03',
        pc : 'uniqlo/works_img.png', 
        mo : 'uniqlo/works_img.png', 
        logo : 'uniqlo/works_logo.png', 
        w : 'width:42px', 
        date : '2019.05 ~ 2019.11', 
        title: `유니클로 Store Pick
               <br>매장에서 Pickup ~`,
        txt : '유니클로 Store Pick',
        content: [{
                list : [       
                    {li : '롯데이커머스 LECS Platform 기반'}, 
                    {li : '유니클로 매장 재고 연계'}, 
                    {li : '유니클로 Pos 시스템  주문 연계'},
                    {li : '주문 / 배송 / 정산 처리 프로세스 변경'}
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