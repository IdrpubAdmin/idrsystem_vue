<template>
    <header id="header">
    <h1 class="header_logo">
      <a href="main.html">
        <img src="../images/common/logo_idr_top.png" alt="아이디알시스템 로고">
      </a>
    </h1>
    <ul class="lnb_wrap lnb_d1_wrap">
        <li class="d1_li" :class="{'on' :commerce}"><a href="commerce.html" data-menu-id=lnb1_01><span>e-commerce</span></a></li>
        <li class="d1_li" :class="{'on' :marketing}"><a href="marketing.html" data-menu-id=lnb1_02><span>AI-Marketing Curator</span></a></li>
        <li class="d1_li" :class="{'on' :design}"><a href="design.html" data-menu-id=lnb1_03><span>UI/UX Design</span></a></li>
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
      commerce: reqUrl.includes('/commerce'),
      marketing: reqUrl.includes('/marketing'),
      design: reqUrl.includes('/design')
    }
  },
  methods: {
    showGnb: function(){
      eventBus.$emit('clickGnb');
    },
  },
}
</script>
