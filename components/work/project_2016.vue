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
        num : '2016_1',
        pc : 'k2/works_img.png', 
        mo : 'k2/works_img.png', 
        logo : 'k2/works_logo.png', 
        w : 'width:48px', 
        date : '2016.03 ~ 2016.10', 
        title : `K2 코리아 온라인
               <br>통합플랫폼`, 
        txt : 'K2 Korea 5개 브랜드 커머스 통합 플랫롬 구축',
        content : [{
                subTxt : 'K2, Eider, Salewa, 와이어앵글, 다이낫핏 5개 Brand Commerce Mall 통합 Platform 구축', 
                list : [
                    {li : 'K2 Mall 구축'},
                    {li : 'Eider Mall 구축'},
                    {li : 'Salewa Mall 구축'},
                    {li : '와이드앵글 Mall 구축'},
                    {li : '다이나핏 Mall 구축'},
                ]
            },{
                subTxt : '프로젝트 범위',
                list : [
                    {li : '서비스 전략 및 상세 서비스 기획'},
                    {li : 'UI기획, 디자인'},
                    {li : '시스템 개발 등 PC웹, 모바일웹 통합 수행'},
                ]
            },{
                subTxt : 'Global Solution 구축 /운영 경험 보유(SAP Hybris)',
            }
        ]
    },
    {
        num : '2016_2',
        pc : 'skmagic/works_img.png', 
        mo : 'skmagic/works_img.png', 
        logo : 'skmagic/works_logo.png', 
        w : 'width:80px', 
        date : '2016.03 ~ 2016.10', 
        title : `동양매직몰 구축
               <br>통합플랫폼`,
        txt : 'SK매직 Commerce Platform 구축',
        content : [{
                list : [
                    {li : 'SK매직 대표 사이트로서 대 고객 통합 커뮤니케이션 채널'},
                    {li : '다이렉트 렌탈 시대 도래에 대한 사전 준비'},
                    {li : '렌탈 – 가전 Cross-Selling 기반 확보'},
                    {li : '방문/구매 고객 분석을 통한 고객 반응 확인 및 고객 통찰 확보'},
                    {li : '디지털 마케팅 Tool에 대한 사용 경험 축적'}
                ]
            }
        ]
    },
    {
        num : '2016_3',
        pc : 'livart/works_img.png', 
        mo : 'livart/works_img.png', 
        logo : 'livart/works_logo.png', 
        w : 'width:113px', 
        date : '2016.03 ~ 2016.10', 
        title : `현대리바트 쇼핑몰 리뉴얼`,
        txt : '현대리바트 쇼핑몰 리뉴얼',
        content : [{
                list : [
                    {li : `리바트 Web, Mobile 쇼핑몰 리뉴얼 프로젝트 수행
                          <br>* UI/UX기획, 디자인, 퍼블리싱
                          <br>* 시스템 개발`},
                    {li : `메인, GNB, QUICK MENU 개인화영역, 페이지 이동 FLOW 등,
                          <br class="only_pc">공통 UI/UX 개편으로 사용 편의성 강화`},
                    {li : `카테고리 대/중/소/상품상세 UI/UX 변경으로 전시강화 및
                          <br class="only_pc">크로스&업셀링 지원`},
                    {li : `몰인몰 입점상품/입점브랜드 및 생활소품 전시확대 및 관리기능
                          <br class="only_pc">신규개발로 리빙/인테리어 전문몰 기능 강화`},
                    {li : `기획전/이벤트/반짝딜/패키지존/브랜드샵/베스트 리뷰 등
                          <br class="only_pc">서비스 메뉴 UI 개편`},
                    {li : 'Admin 고도화를 통해 효율적인 운영을 위한 관리환경 개선'}
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