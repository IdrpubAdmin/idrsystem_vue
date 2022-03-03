<template>
  <header id="header">
    <h1 class="header_logo">
      <a href="main.html">
        <img src="../images/common/logo_idr_top.png" alt="아이디알시스템 로고">
      </a>
    </h1>

    <button type="button" class="gnb_btn" title="메뉴버튼" @click="showGnb()">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>
  </header>
</template>

<script>
  module.exports = {
    data() {
      return {
        gnbModal : false,
      }
    },
    methods: {
      showGnb() {
        const lineX = document.querySelector('.gnb_btn');
        if(this.gnbModal == false){
        this.gnbModal = true;
        lineX.classList.add('on');
        document.body.classList.add('hidden');
        } else {
          this.gnbModal = false;
          lineX.classList.remove('on');
          document.body.classList.remove('hidden')
        }
      }
    },
  }
</script>
