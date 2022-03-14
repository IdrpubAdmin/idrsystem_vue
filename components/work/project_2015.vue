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
                    <li>{{worksBox.li4}}</li>
                    <li>{{worksBox.li5}}</li>
                    <li>{{worksBox.li6}}</li>
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
        pc : '../images/works/samsungmulsan/works_img.png', 
        mo : '../images/works/samsungmulsan/works_img.png', 
        logo : '../images/works/samsungmulsan/works_iogo.png', 
        w : 'width:127px', 
        date : '2015.10 ~ 2016.02', 
        txt1 : '삼성물산 패션부문', 
        txt2 : 'SSFshop & Tmall연계', 
        txt3 : '', 
        tex4 : '',
        title: '삼성물산 SSFshop.com Tmall 연계',
        sub1 : '',
        sub2 : '',
        sub3 : '',
        li1 : '삼성물산 패션부문의 6개 브랜드가 중국 알리바바그룹이 운영하는 티몰 글로벌에 입점', 
        li2 : '티몰글로벌은 중국 알리바바가 전자상거래 분야의 글로벌 허브를 구축하겠다는 전략아래 2015년 초 오픈한 글로벌 해외 직구 브랜드몰 플랫폼임', 
        li3 : '국제특송 업체와 인터페이스를 통해 주문에서 고객 수령까지 5일 이내 완료처리',
        li4 : '상품정보, 주문, 배송 정보를 SSFshop과 Tmall과 실시간인터페이스 처리',
        li5 : '',
        li6 : ''
    },
    {
        pc : '../images/works/kolon/works_img.png', 
        mo : '../images/works/kolon/works_img.png', 
        logo : '../images/works/kolon/works_logo.png', 
        w : 'width:140px', 
        date : '2015.10 ~ 2016.02', 
        txt1 : '코오롱 통합쇼핑몰', 
        txt2 : 'OCC 연계 구축 참여', 
        txt3 : '', 
        tex4 : '',
        title: '코오롱 통합쇼핑몰',
        sub1 : '',
        sub2 : '',
        sub3 : '',
        li1 : '코오롱 브랜드 공식 쇼핑몰인 코오롱 몰과  코오롱 스포츠 공식 쇼핑몰 구축 참여', 
        li2 : '코오롱 통합 쇼핑몰 백오피스와 화면을 연동하는 인터페이스 처리', 
        li3 : 'Adobe 웹 CMS 솔루션 툴을 사용하여 데이터 연동 처리',
        li4 : '솔루션 Tool 및 백오피스 데이터 처리에 대한 다방면의 경험 축적',
        li5 : '',
        li6 : ''
    },
    {
        pc : '../images/works/nongsim/works_img.png', 
        mo : '../images/works/nongsim/works_img.png', 
        logo : '../images/works/nongsim/works_logo.png', 
        w : 'width:38px', 
        date : '2015.04 ~ 2015.07 / 2015.08 ~ 2015.10', 
        txt1 : '농심 메가마트 쇼핑몰', 
        txt2 : '1,2단계 구축', 
        txt3 : '', 
        tex4 : '',
        title: '농심 메가마트 쇼핑몰 구축',
        sub1 : '',
        sub2 : '',
        sub3 : '',
        li1 : '메가마트는 전국에 15개 점포를 보유한 대형마트이며, 메가마트 온라인 쇼핑몰은 지역 마트 기반의 온라인 할인마트 시스템임', 
        li2 : '메가마트의 상품관리시스템에서 각 매장별 가격과 재고정보, 이벤트 정보를 실시간 인터페이스 받음', 
        li3 : '주문 정보는 매장 주문관리시스템으로 인터페이스 하여 매장에서 Pickig -> Packing -> Shipping 처리',
        li4 : '주문 입력 시 배송 가능 시간을 고객이 직접 선택',
        li5 : 'SAP Hybris Commerce Platform으로 3개월만에 1단계 오픈',
        li6 : '2단계는 매장기반이 아닌 협력사 배송시스템 확대 구축'
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