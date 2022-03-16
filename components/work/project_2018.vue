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
        num : 'works_2018_01',
        pc : 'thehandsome/works_img.png', 
        mo : 'thehandsome/works_img.png', 
        logo : 'thehandsome/works_logo.png', 
        w : 'width:168px', 
        date : '2018', 
        title : '더한섬닷컴 모바일 구축', 
        txt : 'thehandsome.com 의 mobile & App Renewal',
        content: [{
                list : [
                    {li : 'PC 기반 쇼핑몰 환경을 모바일에 맞도록 최적화'}, 
                    {li : '고객 편의성에 기여하는 신기술의 적극적인 반영 (바이오인증, 한섬페이, 개인화강화 등)'}, 
                    {li : '모바일 매출 비중 확대'},
                    {li : '앱 다운로드 증가, 타겟 마케팅 인프라 확대'},
                    {li : 'Hybris Commerce Platform 기반'}
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