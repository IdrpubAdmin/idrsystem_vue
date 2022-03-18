<template>
	    <section class="works_card">
			    <span class="wif_subject">삼성전자 구축사례</span>
                <span class="wif_tit">삼성전자 주요 사업실적(1/2)</span>
                    <div class="container">
                        <router-link to="2" class="link_btn">
                            <span>다음 페이지</span>
                        </router-link>
                        <!-- <a class="link_btn" href="works_2013_02_02.html">
                            <span>다음 페이지</span>
                        </a> -->
                        <div v-for="cardBox in list2" :key="cardBox" class="card_wrap">
                            <div class="item color1" :class="cardBox.color">
                                <ul>
                                    <li class="title">{{cardBox.title}}</li>
                                    <li class="title">2016.07 -2016.10</li>
                                    <li>삼성전자 G-CRM GMC 시스템</li>
                                    <li>동남아총괄 확산 및</li>
                                    <li>기능개선 프로젝트</li>
                                </ul>
                            </div>
                            <div class="item color1">
                                <ul>
                                    <li class="title">2016.06 -2016.10</li>
                                    <li>삼성전자 G-CRM</li>
                                    <li>중동총괄 확산 프로젝트</li>
                                </ul>
                            </div>
                            <div class="item color1">
                                <ul>
                                    <li class="title">2016.06 -2016.09</li>
                                    <li>삼성전자 G-CRM</li>
                                    <li>동남아 확산 프로젝트</li>
                                </ul>
                            </div>
                            <div class="item color1">
                                <ul>
                                    <li class="title">2015.01 -2016.03</li>
                                    <li>한국총괄 MIF 시스템</li>
                                    <li>추가 개발 및 운영</li>
                                </ul>
                            </div>
                        </div>
                        <!-- line 2 -->
                        <div class="card_wrap">
                            <div class="item color2">
                                <ul>
                                    <li class="title">2014.12 -2015.10</li>
                                    <li>삼성전자 한국총괄</li>
                                    <li>DM 시스템 개선</li>
                                </ul>
                            </div>
                            <div class="item color2">
                                <ul>
                                    <li class="title">2014.09 -2014.12</li>
                                    <li>G-CRM 시스템</li>
                                </ul>
                            </div>
                            <div class="item color2">
                                <ul>
                                    <li class="title">2014.03 -2014.09</li>
                                    <li>삼성전자 GCRM 프로젝트</li>
                                    <li>멤버십포탈 구축</li>
                                </ul>
                            </div>
                            <div class="item color3">
                                <ul>
                                    <li class="title">2013.09 -2013.10</li>
                                    <li>한국총괄 SAMSUNGBLUE</li>
                                    <li>사이트 및 멤버십 운영</li>
                                </ul>
                            </div>
                        </div>
                        <!-- line 3 -->
                        <div class="card_wrap">
                            <div class="item color3">
                                <ul>
                                    <li class="title">2013.05 - 2014.07</li>
                                    <li>삼성전자 B2B Partner Portal</li>
                                    <li>구축</li>
                                </ul>
                            </div>
                            <div class="item color3">
                                <ul>
                                    <li class="title">2013.05 -2013.06</li>
                                    <li>삼성전자 모바일스토어 구축</li>
                                </ul>
                            </div>
                            <div class="item color3">
                                <ul>
                                    <li class="title">2013.03 -2013.07</li>
                                    <li>삼성전자 한국총괄 직영</li>
                                    <li>온라인 쇼핑몰 </li>
                                    <li>시스템분석/설계</li>
                                </ul>
                            </div>
                            <div class="item color4">
                                <ul>
                                    <li class="title">2012.12 -2013.02</li>
                                    <li>한국총괄 등외급 통합</li>
                                    <li>시스템 개발 용역</li>
                                </ul>
                            </div>
                        </div>
                        <!-- line 4 -->
                        <div class="card_wrap">
                            <div class="item color4">
                                <ul>
                                    <li class="title">2012.05 - 2013.04</li>
                                    <li>한국총괄 프리미엄</li>
                                    <li>판촉 시스템 개발/운영</li>
                                </ul>
                            </div>
                            <div class="item color4">
                                <ul>
                                    <li class="title">2012.04 -2012.08</li>
                                    <li>한국총괄 B2B거래선정보개선</li>
                                    <li>개발</li>
                                </ul>
                            </div>
                            <div class="item color4">
                                <ul>
                                    <li class="title">2012.01 - 2012.05</li>
                                    <li>삼성전자 한국총괄 프리미엄</li>
                                    <li>판촉 시스템 구축</li>
                                </ul>
                            </div>
                            <router-link to="2" class="item color0 link_card">
                                <p>다음 페이지</p>
                            </router-link>
                            <!-- <a  class="item color0 link_card" href="works_2013_02_02.html"> -->
                                <!-- <p> 다음페이지</p> -->
                            <!-- </a> -->
                        </div><!--// card_wrap-->
                    </div>
	    </section>
</template>

<script>
const cardData = [
    {
        color : 'color1',
        title : '2016.07 -2016.10'
    }
]
module.exports = {
    data() {
        return {
            list2 : cardData
        }
    },
}
</script>