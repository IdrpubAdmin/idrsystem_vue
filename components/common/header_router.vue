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
        <li v-for="lnbMenu2 in list2" :key="lnbMenu2" class="d1_li" :class="{on : lnbMenu2.class}">
          <a :href=" 'works_' + lnbMenu2.title + '.html' ">
            <span>{{lnbMenu2.title}}</span>
          </a>
          <ul class="lnb_d2_wrap">
            <li v-for="subMenu in lnbMenu2.d2" :key="subMenu" class="d2_li" :data-num="subMenu.num">
              <a :href="'#' + subMenu.num">
                <span>{{subMenu.num}}</span>
              </a>
            </li>
          </ul>
        </li>
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
  {class : reqUrl.includes('2021'), title : '2021', d2 : [ {num : '1'}, {num : '2'}, {num : '3'}, {num : '4'} ]},
  {class : reqUrl.includes('2020'), title : '2020', d2 : [ {num : '1'}, {num : '2'}, {num : '3'} ]},
  {class : reqUrl.includes('2019'), title : '2019', d2 : [ {num : '1'}, {num : '2'}, {num : '3'} ]},
  {class : reqUrl.includes('2018'), title : '2018', d2 : [ {num : '1'} ]},
  {class : reqUrl.includes('2017'), title : '2017', d2 : [ {num : '1'}, {num : '2'} ]},
  {class : reqUrl.includes('2016'), title : '2016', d2 : [ {num : '1'}, {num : '2'}, {num : '3'} ]},
  {class : reqUrl.includes('2015'), title : '2015', d2 : [ {num : '1'}, {num : '2'}, {num : '3'} ]},
  {class : reqUrl.includes('2014'), title : '2014', d2 : [ {num : '1'}, {num : '2'}, {num : '3'} ]},
  {class : reqUrl.includes('2013'), title : '2013', d2 : [ {num : '1'}, {num : '2'} ]}
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
      list2 : lnbData2,
      list3 : lnbData3,
    }
  },
  methods: {
    showGnb: function(){
      eventBus.$emit('clickGnb');
    },
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("fixed");
  } else {
    document.getElementById("header").classList.remove("fixed");
  }
}
</script>
