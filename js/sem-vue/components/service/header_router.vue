<template>
  <header id="header">
    <h1 class="header_logo">
      <a href="main.html">
        <img src="../images/common/logo_idr_top.png" alt="아이디알시스템 로고">
      </a>
    </h1>
    <ul class="lnb_wrap lnb_d1_wrap" v-if="serviceLnb">
        <li class="d1_li" :class="{on : commerceOn}"><router-link to="/" data-menu-id=lnb1_01 exact><span>e-commerce</span></router-link></li>
        <li class="d1_li" :class="{on : marketingOn}"><router-link to="/marketing" data-menu-id=lnb1_02 exact><span>AI-Marketing Curator</span></router-link></li>
        <li class="d1_li" :class="{on : designOn}"><router-link to="/design" data-menu-id=lnb1_03 exact><span>UI/UX Design</span></router-link></li>
    </ul>
    <ul class="lnb_wrap lnb_d1_wrap" v-if="contactLnb">
        <li class="d1_li"><router-link to="/" data-menu-id=lnb1_01><span>IDR 소개</span></router-link></li>
        <li class="d1_li"><router-link to="/history" data-menu-id=lnb1_02><span>연혁</span></router-link></li>
        <li class="d1_li"><router-link to="/recruit" data-menu-id=lnb1_03><span>채용안내</span></router-link></li>
    </ul>
    <button type="button" class="gnb_btn" title="메뉴버튼" @click="showGnb">
      <span class="line" v-for="line in 3" :key="line"></span>
    </button>
  </header>
</template>

<script>
const reqUrl = window.location.pathname;
const reqHash = window.location.href;
module.exports = {
  data() {
    return {
      serviceLnb: reqUrl.includes('/service'),
      contactLnb: reqUrl.includes('/contact'),
      commerceOn: reqHash.includes('/commerce'),
      marketingOn: reqHash.includes('/marketing'),
      designOn: reqHash.includes('/design')
    }
  },
  methods: {
    showGnb: function(){
      eventBus.$emit('clickGnb');
    }
  },
}
</script>
