<template>
  <div class="gnb_wrap on" v-show="gnbModal">
    <ul class="gnb_menu" :class="{ has_wnd_nav : lnbOn }">
      <li v-for="gnbMenu in list" :key="gnbMenu" :class="{on : gnbMenu.class}">
        <a :href="gnbMenu.href"><span>{{gnbMenu.title}}</span></a>
      </li>
    </ul>
  </div>
</template>

<script>
const reqUrl = window.location.pathname;
const gnbData = [
	{class : reqUrl.includes('/service'), href : 'service.html', title : 'service'},
	{class : reqUrl.includes('/works'), href : 'works_2021.html', title : 'work'},
	{class : reqUrl.includes('/contact'), href : 'contact.html', title : 'contact'}
];
module.exports = {
  data() {
    return {
      list : gnbData,
      gnbModal : false,
      lnbOn : reqUrl.includes('/service') || reqUrl.includes('/contact') || reqUrl.includes('/works'),
    }
  },
  created: function() {
    const lineX = document.querySelector('.gnb_btn');
    const body = document.body;
    const header = document.querySelector('header');
    // 모달 이벤트
    eventBus.$on('clickGnb', function(){
      if(this.gnbModal == false){
      this.gnbModal = true;
      lineX.classList.add('on');
      body.classList.add('hidden');
      header.classList.add('gnb_on');
      } else {
        this.gnbModal = false;
        lineX.classList.remove('on');
        body.classList.remove('hidden');
        header.classList.remove('gnb_on');
      }
    }.bind(this));
    // 라우터 클릭했을때 모달 닫는 이벤트
    eventBus.$on('closeGnb', function(){
      if(this.gnbModal == true){
        this.gnbModal = false;
        lineX.classList.remove('on');
        body.classList.remove('hidden');
        header.classList.remove('gnb_on');        
      }
    }.bind(this));
    // 스크롤 이벤트
    eventBus.$on('scrollEvt', function(selectedAnchor){
      if(this.gnbModal == false){
        document.getElementById(selectedAnchor).scrollIntoView({ 
          behavior: 'smooth'
        });
      }
    }.bind(this));
  },
}
</script>
