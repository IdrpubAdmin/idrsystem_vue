<template>
  <header id="header">
    <h1 class="header_logo">
      <a href="main.html">
        <img src="../images/common/logo_idr_top.png" alt="아이디알시스템 로고">
      </a>
    </h1>
    <ul class="lnb_wrap lnb_d1_wrap" v-if="serviceLnb">
        <router-link v-for="lnbMenu1 in list1" :key="lnbMenu1" class="d1_li" :to="lnbMenu1.to" tag="li"><a href="#none"><span>{{lnbMenu1.title}}</span></a></router-link>
    </ul>
    <ul class="lnb_wrap lnb_d1_wrap" v-if="worksLnb">
        <router-link v-for="lnbMenu2 in list2" :key="lnbMenu2" class="d1_li" :to="lnbMenu2.to" tag="li"><a href="#none"><span>{{lnbMenu2.title}}</span></a></router-link>
    </ul>
    <ul class="lnb_wrap lnb_d1_wrap" v-if="contactLnb">
        <router-link v-for="lnbMenu3 in list3" :key="lnbMenu3" class="d1_li" :to="lnbMenu3.to" tag="li"><a href="#none"><span>{{lnbMenu3.title}}</span></a></router-link>
    </ul>
    <button type="button" class="gnb_btn" title="메뉴버튼" @click="showGnb">
      <span class="line" v-for="line in 3" :key="line"></span>
    </button>
  </header>
</template>

<script>
const reqUrl = window.location.pathname;
const lnbData1 = [
  {to : '/', title : 'e-commerce'},
  {to : '/marketing', title : 'AI-Marketing Curator'},
  {to : '/design', title : 'UI/UX Design'}
];
const lnbData2 = [
  {to : '/', title : '2021'},
  {to : '/2020', title : '2020'},
  {to : '/2019', title : '2019'},
  {to : '/2018', title : '2018'},
  {to : '/2017', title : '2017'},
  {to : '/2016', title : '2016'},
  {to : '/2015', title : '2015'},
  {to : '/2014', title : '2014'},
  {to : '/2013', title : '2013'}
];
const lnbData3 = [
  {to : '/', title : 'IDR 소개'},
  {to : '/history', title : '연혁'},
  {to : '/recruit', title : '채용안내'}
];
module.exports = {
  data() {
    return {
      serviceLnb: reqUrl.includes('/service'),
      worksLnb: reqUrl.includes('/works'),
      contactLnb: reqUrl.includes('/contact'),
      list1 : lnbData1,
      list2 : lnbData1,
      list3 : lnbData3,
    }
  },
  methods: {
    showGnb: function(){
      eventBus.$emit('clickGnb');
    }
  },
}
</script>
