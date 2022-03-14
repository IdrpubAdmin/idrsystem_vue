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
                    <li v-for="contentData in worksBox.content" :key="contentData">{{contentData.li}}</li>
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
        pc : '../images/works/chilsung/works_img.png', 
        mo : '../images/works/chilsung/works_img.png', 
        logo : '../images/works/chilsung/works_logo.png', 
        w : 'width:77px', 
        date : '2019.05 ~ 2019.11', 
        txt1 : '롯데 이커머스의 LECS 플랫폼을', 
        txt2: '기반으로 롯데칠성몰 구축참여', 
        txt3: '', 
        tex4: '',
        title: '롯데 칠성몰 구축',
        content : [
            { li : '롯데이커머스 LECS Platform 기반 식품전문몰 구축' }, 
            { li : '정기주문 / 정기배송 Process' }, 
            { li : 'SAP ERP 주문 연계' },
            { li : 'Fornt 주문 / 결제 및 Back Office 영역 개발' }
        ],
    },
    {
        pc : '../images/works/conran/works_img.png', 
        mo : '../images/works/conran/works_img.png', 
        logo : '../images/works/conran/works_logo.png', 
        w : 'width:163px', 
        date : '2019.05 ~ 2019.11', 
        txt1 : '영국의 명품 가구 편집샵', 
        txt2: '한국 상륙한 더콘란샵.', 
        txt3: '', 
        tex4: '',
        title: '더콘란샵 구축(영국의 명품 가구 편집샵)',
        content: [
            { li : '롯데이커머스 LECS Platform 기반' }, 
            { li : '더콘란샵 Global Guide Line 준용' }, 
            { li : '롯데백화점 ERP 시스템과 연계' },
            { li : '주문제작형 가구 주문 처리 구현' }
        ]
    },
    {
        pc : '../images/works/uniqlo/works_img.png', 
        mo : '../images/works/uniqlo/works_img.png', 
        logo : '../images/works/uniqlo/works_logo.png', 
        w : 'width:42px', 
        date : '2019.05 ~ 2019.11', 
        txt1 : '유니클로 Store Pick', 
        txt2: '매장에서 Pickup ~', 
        txt3: '', 
        tex4: '',
        title: '유니클로 Store Pick',
        content: [
            { li : '롯데이커머스 LECS Platform 기반' }, 
            { li : '니클로 매장 재고 연계' }, 
            { li : '유니클로 Pos 시스템  주문 연계' },
            { li : '주문 / 배송 / 정산 처리 프로세스 변경' }
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