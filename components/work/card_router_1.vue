<template>
	<section class="works_card" id="2">
		<span class="wif_subject">삼성전자 구축사례</span>
        <span class="wif_tit">삼성전자 주요 사업실적(1/2)</span>
        <div class="container">
            <router-link to="/2" class="link_btn">
                <span>다음 페이지</span>
            </router-link>
            <div class="card_wrap">
                <div v-for="cardBox in list" :key="cardBox" class="item" :class="'color' + cardBox.color">
                    <ul>
                        <li class="title">{{cardBox.date}}</li>
                        <li v-for="listData in cardBox.list" :key="listData">{{listData.li}}</li>
                    </ul>
                </div>
            </div>
            <div class="card_wrap">
                <div v-for="cardBox in list2" :key="cardBox" class="item" :class="'color' + cardBox.color">
                    <ul>
                        <li class="title">{{cardBox.date}}</li>
                        <li v-for="listData in cardBox.list" :key="listData">{{listData.li}}</li>
                    </ul>
                </div>
            </div>
            <div class="card_wrap">
                <div v-for="cardBox in list3" :key="cardBox" class="item" :class="'color' + cardBox.color">
                    <ul>
                        <li class="title">{{cardBox.date}}</li>
                        <li v-for="listData in cardBox.list" :key="listData">{{listData.li}}</li>
                    </ul>
                </div>
            </div>
            <div class="card_wrap">
               <div v-for="cardBox in list4" :key="cardBox" class="item" :class="'color' + cardBox.color">
                    <ul>
                        <li class="title">{{cardBox.date}}</li>
                        <li v-for="listData in cardBox.list" :key="listData">{{listData.li}}</li>
                    </ul>
                </div>
                <router-link to="/2" class="item color0 link_card">
                    <p>다음 페이지</p>
                </router-link>
            </div>
        </div>
	</section>
</template>

<script>
const cardData = [
    {
        color : '1',
        date : '2016.07 -2016.10',
        list : [
            {li : '삼성전자 G-CRM GMC 시스템'},
            {li : '동남아총괄 확산 및'},
            {li : '기능개선 프로젝트'}
        ]
    },
    {
        color : '1',
        date : '2016.06 -2016.10',
        list : [
            {li : '삼성전자 G-CRM'},
            {li : '중동총괄 확산 프로젝트'},
        ]
    },
        {
        color : '1',
        date : '2016.06 -2016.09',
        list : [
            {li : '삼성전자 G-CRM'},
            {li : '동남아 확산 프로젝트'},
        ]
    },
        {
        color : '1',
        date : '2015.01 -2016.03',
        list : [
            {li : '한국총괄 MIF 시스템'},
            {li : '추가 개발 및 운영'},
        ]
    }
]
const cardData2 = [
    {
        color : '2',
        date : '2014.12 -2015.10',
        list : [
            {li : '삼성전자 한국총괄'},
            {li : 'DM 시스템 개선'}
        ]
    },
    {
        color : '2',
        date : '2014.09 -2014.12',
        list : [
            {li : 'G-CRM 시스템'}
        ]
    },
        {
        color : '2',
        date : '2014.03 -2014.09',
        list : [
            {li : '삼성전자 GCRM 프로젝트'},
            {li : '멤버십포탈 구축'}
        ]
    },
       {
        color : '3',
        date : '2013.09 -2013.10',
        list : [
            {li : '한국총괄 SAMSUNGBLUE'},
            {li : '사이트 및 멤버십 운영'}
        ]
    }
]
const cardData3 = [
    {
        color : '3',
        date : '2013.05 - 2014.07',
        list : [
            {li : '삼성전자 B2B Partner Portal'},
            {li : '구축'}
        ]
    },
    {
        color : '3',
        date : '2013.05 -2013.06',
        list : [
            {li : '삼성전자 모바일스토어 구축'}
        ]
    },
        {
        color : '3',
        date : '2013.03 -2013.07',
        list : [
            {li : '삼성전자 한국총괄 직영'},
            {li : '온라인 쇼핑몰'},
            {li : '시스템분석/설계'}
        ]
    },
       {
        color : '4',
        date : '2012.12 -2013.02',
        list : [
            {li : '한국총괄 등외급 통합'},
            {li : '시스템 개발 용역'}
        ]
    }
]
const cardData4 = [
    {
        color : '4',
        date : '2012.05 - 2013.04',
        list : [
            {li : '한국총괄 프리미엄'},
            {li : '판촉 시스템 개발/운영'}
        ]
    },
    {
        color : '4',
        date : '2012.04 -2012.08',
        list : [
            {li : '한국총괄 B2B거래선정보개선'},
            {li : '개발'}
        ]
    },
        {
        color : '4',
        date : '2012.01 - 2012.05',
        list : [
            {li : '삼성전자 한국총괄 프리미엄'},
            {li : '판촉 시스템 구축'}
        ]
    }
]
module.exports = {
    data() {
        return {
            list : cardData,
            list2 : cardData2,
            list3 : cardData3,
            list4 : cardData4
        }
    },
}
</script>