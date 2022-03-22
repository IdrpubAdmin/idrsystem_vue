<template>
    <section class="works_card" id="2">
	    <span class="wif_subject">삼성전자 구축사례</span>
        <span class="wif_tit">삼성전자 주요 사업실적(2/2)</span>
        <div class="container">
            <router-link to="/1" class="link_btn before">
                <span>이전 페이지</span>
            </router-link>
            <div class="card_wrap">
                <router-link to="/1" class="item color0 link_card before">
                    <p>이전 페이지</p>
                </router-link>
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
            </div>
        </div>
    </section>
</template>

<script>
const cardData = [
    {
        color : '5',
        date : '2011.10 -2013.12',
        list : [
            {li : '한국총괄 MIF SYSTEM 구축'},
        ]
    },
    {
        color : '5',
        date : '2011.08 -2011.11',
        list : [
            {li : '삼성전자 임직원전용'},
            {li : '쇼핑몰 재구축 (패밀리넷)'},
        ]
    },
        {
        color : '5',
        date : '2011.05 -2011.08',
        list : [
            {li : '한국총괄 MD쇼핑몰'},
            {li : '컨텐츠 위탁운영'},
        ]
    }
]
const cardData2 = [
    {
        color : '6',
        date : '2010.06 -2010.12',
        list : [
            {li : '삼성모바일디스플레이'},
            {li : '지식경영 고도화'}
        ]
    },
    {
        color : '7',
        date : '2009.12 -2010.02',
        list : [
            {li : '삼성전자 임직원전용'},
            {li : '쇼핑몰 구축 (패밀리넷)'},
        ]
    },
        {
        color : '7',
        date : '2009.08 -2009.12',
        list : [
            {li : '삼성전자 반도체 CDP 프로젝트'}
        ]
    },
       {
        color : '8',
        date : '2008.06 -2008.12',
        list : [
            {li : 'Global ERP 연계 프로젝트'}
        ]
    }
]
const cardData3 = [
    {
        color : '8',
        date : '2008.02 - 2008.07',
        list : [
            {li : '삼성전자 반도체 마케팅문서'},
            {li : '통합관리시스템 구축'}
        ]
    },
    {
        color : '9',
        date : '2007.09 -2008.01',
        list : [
            {li : '삼성전자 사은품2차 SYSTEM 구축'}
        ]
    },
        {
        color : '9',
        date : '2007.09 -2007.12',
        list : [
            {li : '삼성전자 한국총괄'},
            {li : 'Anycall 포탈 구축'}
        ]
    },
       {
        color : '10',
        date : '2006.11 - 2007.02',
        list : [
            {li : '삼성전자 한국총괄'},
            {li : '사은품관리시스템'}
        ]
    }
]
const cardData4 = [
    {
        color : '10',
        date : '2006.08 - 2006.10',
        list : [
            {li : '삼성전자 한국총괄'},
            {li : '마케팅정보'},
            {li : '통합시스템 구축'}
        ]
    },
    {
        color : '10',
        date : '2006.03 -2006.07',
        list : [
            {li : '삼성전자 한국총괄'},
            {li : '임직원포탈 구축'},
        ]
    },
        {
        color : '10',
        date : '2005.10 - 2006.03',
        list : [
            {li : 'B2B PVI 시스템 구축'}
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