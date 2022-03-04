<template>
  <header id="header">
    <h1 class="header_logo">
      <a href="main.html">
        <img src="../images/common/logo_idr_top.png" alt="아이디알시스템 로고">
      </a>
    </h1>

    <button type="button" class="gnb_btn" title="메뉴버튼" @click="showGnb">
      <span class="line" v-for="line in 3" :key="line"></span>
    </button>
  </header>
</template>

<script>
module.exports = {
  data() {
    return {
      
    }
  },
  methods: {
    showGnb: function(){
      eventBus.$emit('clickGnb');
    }
  },
}
</script>
