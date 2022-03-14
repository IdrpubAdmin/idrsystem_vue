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
                </ul>
                <p class="wifd_con">{{worksBox.sub2}}</p>
                <ul class="wifd_con">
                    <li>{{worksBox.li6}}</li>
                    <li>{{worksBox.li7}}</li>
                    <li>{{worksBox.li8}}</li>
                </ul>
                <p class="wifd_con">{{worksBox.sub3}}</p>
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
        pc : '../images/works/k2/works_img.png', 
        mo : '../images/works/k2/works_img.png', 
        logo : '../images/works/k2/works_logo.png', 
        w : 'width:48px', 
        date : '2016.03 ~ 2016.10', 
        txt1 : 'K2 코리아 온라인', 
        txt2 : '통합플랫폼', 
        txt3 : '', 
        tex4 : '',
        title: '제휴복지몰 구축',
        sub1 : 'K2 Korea 5개 브랜드 커머스 통합 플랫롬 구축',
        sub2 : '프로젝트 범위',
        sub3 : 'Global Solution 구축 /운영 경험 보유(SAP Hybris)',
        li1 : 'K2 Mall 구축', 
        li2 : 'Eider Mall 구축', 
        li3 : 'Salewa Mall 구축',
        li4 : '와이드앵글 Mall 구축',
        li5 : '다이나핏 Mall 구축',
        li6 : '서비스 전략 및 상세 서비스 기획',
        li7 : 'UI기획, 디자인',
        li8 : '시스템 개발 등 PC웹, 모바일웹 통합 수행'
    },
    {
        pc : '../images/works/skmagic/works_img.png', 
        mo : '../images/works/skmagic/works_img.png', 
        logo : '../images/works/skmagic/works_logo.png', 
        w : 'width:80px', 
        date : '2016.03 ~ 2016.10', 
        txt1 : '동양매직몰 구축', 
        txt2 : '통합플랫폼', 
        txt3 : '', 
        tex4 : '',
        title: 'SK매직 Commerce Platform 구축',
        sub1 : '',
        sub2 : '',
        sub3 : '',
        li1 : 'SK매직 대표 사이트로서 대 고객 통합 커뮤니케이션 채널', 
        li2 : '다이렉트 렌탈 시대 도래에 대한 사전 준비', 
        li3 : '렌탈 – 가전 Cross-Selling 기반 확보',
        li4 : '방문/구매 고객 분석을 통한 고객 반응 확인 및 고객 통찰 확보',
        li5 : '디지털 마케팅 Tool에 대한 사용 경험 축적',
        li7 : '',
        li8 : ''
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