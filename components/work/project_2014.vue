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
                <p class="wifd_tit">{{worksBox.txt}}</p>
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
        num : '2014_1',
        pc : 'imarket/works_img.png', 
        mo : 'imarket/works_img.png', 
        logo : 'imarket/works_logo.png', 
        w : 'width:130px', 
        date : '2014.02 ~ 2014.10', 
        title : `아이마켓코리아
                <br>B2B Mall`,
        txt : '아이마켓 B2B 쇼핑몰 구축',
        content : [{ 
                list : [
                    {li : `기존 MRO서비스몰 아이마켓을 B2B, B2C 서비스 확대
                          <br>* 프로젝트 총괄 및 PM
                          <br>* 디자인 및 퍼블리싱`},
                    {li : '시스템 개발 아이마켓 프로젝트의 전반적인 개발업무를 담당'},
                    {li : '인터파크 쇼핑몰과 시스템 연동'},
                    {li : '유지운영 효율성 강화를 위한 관리자 기능 구현'},
                    {li : '기존 시스템 Data Migration 및 데이터 이행'},
                    {li : '아이마켓을 위한 New Brand Identity 적용'}
                ]
            }
        ]
    },
    {
        num : '2014_2',
        pc : 'skinfood/works_img.png', 
        mo : 'skinfood/works_img.png', 
        logo : 'skinfood/works_logo.png', 
        w : 'width:140px', 
        date : '2015.10 ~ 2016.02', 
        title : `스킨푸드 쇼핑몰
                <br>구축 및 운영`,
        txt : `스킨푸드 쇼핑몰 구축 (2014.11 -2015.05)
              <br>스킨푸드 쇼핑몰 운영 (2015.06 - 2015.12)`,
        content : [{ 
                subTxt : '킨푸드 쇼핑몰 구축 및 운영',
                list : [
                    {li : '스킨푸드 웹 및 모바일 채널 리뉴얼 프로젝트 수행'},
                    {li : '서비스 전략 및 상세 서비스 기획'},
                    {li : 'UI기획, 디자인'},
                    {li : '시스템 개발 등 PC웹, 모바일웹, 글로벌까지 통합 수행'},
                    {li : '스킨푸드 모바일 멤버십 App 개발 (Android, iOS)'},
                    {li : '스킨푸드 쇼핑몰 유지운영 수행'},
                ]
            }
        ]
    },
    {
        num : '2014_3',
        pc : 'nongsim/works_img.png', 
        mo : 'nongsim/works_img.png', 
        logo : 'nongsim/works_logo.png', 
        w : 'width:38px', 
        date : '2015.04 ~ 2015.07 / 2015.08 ~ 2015.10', 
        title : `농심 메가마트 쇼핑몰
                <br>1,2단계 구축`,
        txt : '농심 메가마트 쇼핑몰 구축',
        content : [{ 
                list : [
                    {li : `메가마트는 전국에 15개 점포를 보유한 대형마트이며,
                          <br class="only_pc">메가마트 온라인 쇼핑몰은 지역 마트 기반의 온라인 할인마트 시스템임`},
                    {li : `메가마트의 상품관리시스템에서 각 매장별 가격과 재고정보,
                          <br class="only_pc">이벤트 정보를 실시간 인터페이스 받음`},
                    {li : `주문 정보는 매장 주문관리시스템으로 인터페이스 하여 매장에서
                          <br class="only_pc">Pickig -> Packing -> Shipping 처리`},
                    {li : '주문 입력 시 배송 가능 시간을 고객이 직접 선택'},
                    {li : 'SAP Hybris Commerce Platform으로 3개월만에 1단계 오픈'},
                    {li : '2단계는 매장기반이 아닌 협력사 배송시스템 확대 구축'}
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