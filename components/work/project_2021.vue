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
        num : 'works_2021_01',
        pc : 'eland_qualqual/works_img.png', 
        mo : 'eland_qualqual/works_img.png', 
        logo : 'eland_qualqual/works_logo.png', 
        w : 'width:118px',
        date : '2020.11 ~ 2021.02', 
        title: `이랜드 신규브랜드
              <br>콸콸 구축 및 운영`, 
        txt : '이랜드그룹의 콸콸쇼핑몰(셀러몰) 구축',
        content: [{ 
                list : [
                    {li : 'MSA (Micro Service Architecture) 기반 IDR Comm’On Solution 적용 구축'}, 
                    {li : '셀러들이 지인들과 공유할 상품을 서랍에 담은 후, 카카오톡을 통해 상품정보를 공유'}, 
                    {li : '지인들이 공유된 상품을 주문하면 셀러들에게 인센티브를 지급'}
                ]
            }    
        ]
    },
    {
        num : 'works_2021_02',
        pc : 'hyundai_arket/works_img.png', 
        mo : 'hyundai_arket/works_img_mo.png', 
        logo : 'hyundai_arket/works_logo.png', 
        w : 'width:110px', 
        date : '2021.05 ~ 2021.12', 
        title : `현대백화점
               <br>아르켓 (ARKET) 온라인 쇼핑몰
               <br class="only_m">구축`,  
        txt : '글로벌 브랜드 사이트 구축',
        content : [{ 
                list : [
                    {li : '더현대닷컴 Platform기반'}, 
                    {li : 'ARKET Global Guide Line 준용'}, 
                    {li : '물류 API연동과 더현대닷컴 ERP시스템과 연계'}
                ]
            }   
        ]
    },
    {
        num : 'works_2021_03',
        pc : 'dongbanmall/works_img.png', 
        mo : 'dongbanmall/works_img_mo.png', 
        logo : 'dongbanmall/works_logo.png', 
        w : 'width:53px', 
        c : '2021_3',
        date : '2021.04 ~ 2022.02', 
        title : `중소기업유통센터
               <br>‘가치삽시다’ 년간 운영`, 
        txt: '가치삽시다 - 년간 운영 계약',
        content : [{ 
                list : [
                    {li : "1인 소상공인 미디어 플랫폼 '가치삽시다' 년간 운영"}
                ]
            }
        ]
    },
    {
        num : 'works_2021_04',
        pc : 'seegene/works_img.png', 
        mo : 'seegene/works_img_mo.png', 
        logo : 'seegene/works_logo.png', 
        w : 'width:164px', 
        c : '2021_4',
        date : '2021.06 ~ 2021.11', 
        title : `씨젠의료재단 차세대 정보화
               <br class="only_m">시스템 구축
               <br>전략 컨설팅`, 
        txt: '씨젠의료재단 차세대 정보화 시스템 구축 전략 컨설팅',
        content : [{ 
                list : [
                    {li : 'As-Is업무체계분석,현안분석 및 개선기회도출'}, 
                    {li : 'LIS분석,LIS 개선방향 수립,차세대 LIS기본설계'}
                ]
            }
        ]
    },
];

module.exports = {
    data() {
        return {
            list : worksData
        }
    },
}
</script>