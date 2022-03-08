<template>
  <header id="header">
    <h1 class="header_logo">
      <a href="main.html">
        <img src="../images/common/logo_idr_top.png" alt="아이디알시스템 로고">
      </a>
    </h1>
    <ul class="lnb_wrap lnb_d1_wrap" v-if="serviceLnb">
        <li class="d1_li" :class="{on : commerceOn}"><a href="commerce_vue.html" data-menu-id=lnb1_01><span>e-commerce</span></a></li>
        <li class="d1_li" :class="{on : marketingOn}"><a href="marketing_vue.html" data-menu-id=lnb1_02><span>AI-Marketing Curator</span></a></li>
        <li class="d1_li" :class="{on : designOn}"><a href="design_vue.html" data-menu-id=lnb1_03><span>UI/UX Design</span></a></li>
    </ul>
    <ul class="lnb_wrap lnb_d1_wrap" v-if="contactLnb">
        <li class="d1_li" :class="{on : introOn}"><a href="intro_vue.html" data-menu-id=lnb1_01><span>IDR 소개</span></a></li>
        <li class="d1_li" :class="{on : historyOn}"><a href="history_vue.html" data-menu-id=lnb1_02><span>연혁</span></a></li>
        <li class="d1_li" :class="{on : recruitOn}"><a href="recruit_vue.html" data-menu-id=lnb1_03><span>채용안내</span></a></li>
    </ul>
    <button type="button" class="gnb_btn" title="메뉴버튼" @click="showGnb">
      <span class="line" v-for="line in 3" :key="line"></span>
    </button>
  </header>
</template>

<script>
const reqUrl = window.location.pathname;

module.exports = {
  data() {
    return {
      serviceLnb: reqUrl.includes('/commerce') || reqUrl.includes('/marketing') || reqUrl.includes('/design'),
      contactLnb: reqUrl.includes('/intro') || reqUrl.includes('/history') || reqUrl.includes('/recruit'),
      commerceOn: reqUrl.includes('/commerce'),
      marketingOn: reqUrl.includes('/marketing'),
      designOn: reqUrl.includes('/design'),
      introOn: reqUrl.includes('/intro'),
      historyOn: reqUrl.includes('/history'),
      recruitOn: reqUrl.includes('/recruit')
    }
  },
  methods: {
    showGnb: function(){
      eventBus.$emit('clickGnb');
    }
  },
}
</script>
