<template>
    <section class="portfolio_box">
		<h3 class="sec_tit">IDR 포트폴리오</h3>
		<ul>
            <li v-for="mainPort in list" :key="mainPort">
                <a :href="mainPort.link">
                    <div class="ptfl_item">
                        <img :src="mainPort.image" :alt="mainPort.alt">
                        <div class="ptfl_info">
                            <p class="tit_date">{{mainPort.period}}</p>
                            <p class="tit">
                                <span class="tit_sub">{{mainPort.title1}}<br class="only_pc">{{mainPort.title2}}<br class="only_pc">{{mainPort.title3}}</span>
                            </p>
                            <p class="tit_desc">{{mainPort.subTitle}}</p>
                        </div>
                    </div>
                </a>
            </li>
		</ul>
	</section>
</template>

<script>
const portfolioData = [
    {link : 'works_2021.html', image : '../images/main/list/ptfl_thumb_11.jpg', alt : '씨젠의료재단', period : '2021.06-2021.11', 
    title1 : '씨젠의료재단', title2 : '차세대 정보화 시스템 구축', title3 : '전략 컨설팅', subTitle : '씨젠의료재단 차세대 정보화 시스템 구축 전략 컨설팅'},
    {link : 'works_2021.html', image : '../images/main/list/ptfl_thumb_10.jpg', alt : '중소기업유통센터', period : '2021.04-2022.02', 
    title1 : '중소기업유통센터', title2 : '[ 가치삽시다 ]', title3 : '년간 운영', subTitle : '가치삽시다 - 년간운영 계약'},
    {link : 'works_2021.html', image : '../images/main/list/ptfl_thumb_09.jpg', alt : '현대백화점(ARKET)', period : '2021.05-2021.12', 
    title1 : '현대백화점', title2 : '아르켓 (ARKET)', title3 : '온라인 쇼핑몰 구축에 참여', subTitle : '글로벌 브랜드 사이트 구축'},
    {link : 'works_2021.html', image : '../images/main/list/ptfl_thumb_08.jpg', alt : '이랜드 신규브랜드 콸콸', period : '2020.11-2021.02', 
    title1 : '이랜드 신규브랜드', title2 : '콸콸 구축 및 운영', subTitle : '이랜드 그룹의 콸콸 쇼핑몰(셀러몰) 구축'},
    {link : 'works_2020.html', image : '../images/main/list/ptfl_thumb_07.jpg', alt : '현대그린푸드', period : '2020.06-2020.12', 
    title1 : '현대그린푸드', title2 : '그리팅몰 기능개선완료', subTitle : '그리팅몰 기능 개선완료'},
    {link : 'works_2020.html', image : '../images/main/list/ptfl_thumb_06.jpg', alt : '글라이드쇼핑몰 구축', period : '2019.11-2020.06', 
    title1 : '하림그룹의 신제조 및 신유통', title2 : '개념이 결합된', title3 : '온라인 커머스 사업', subTitle : '글라이드쇼핑몰 구축(식품 전문 쇼핑몰 구축)'}
];
module.exports = {
    data() {
        return {
            list : portfolioData
        }
    },
}
</script>
