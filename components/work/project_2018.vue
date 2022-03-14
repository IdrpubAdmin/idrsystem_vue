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
                    <li>{{worksBox.li1}}</li>
                    <li>{{worksBox.li2}}</li>
                    <li>{{worksBox.li3}}</li>
                    <li>{{worksBox.li4}}</li>
                    <li>{{worksBox.li5}}</li>
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
        pc : '../images/works/thehandsome/works_img.png', 
        mo : '../images/works/thehandsome/works_img.png', 
        logo : '../images/works/thehandsome/works_logo.png', 
        w : 'width:168px', 
        date : '2018', 
        txt1 : '더한섬닷컴 모바일 구축', 
        txt2: '', 
        txt3: '', 
        tex4: '',
        title: 'thehandsome.com 의 mobile & App Renewal',
        li1 : 'PC 기반 쇼핑몰 환경을 모바일에 맞도록 최적화', 
        li2 : '고객 편의성에 기여하는 신기술의 적극적인 반영 (바이오인증, 한섬페이, 개인화강화 등)', 
        li3 : '모바일 매출 비중 확대',
        li4 : '앱 다운로드 증가, 타겟 마케팅 인프라 확대',
        li4 : 'Hybris Commerce Platform 기반'
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