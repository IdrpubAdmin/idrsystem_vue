<template>
  <div class="gnb_wrap on" v-show="gnbModal">
    <ul class="gnb_menu" :class="{ has_wnd_nav : lnbOn }">
        <li :class="{on : serviceOn}"><a href="service.html"><span>service</span></a></li>
				<li :class="{on : worksOn}"><a href="works_2021_01.html"><span>work</span></a></li>
				<li :class="{on : contactOn}"><a href="contact.html"><span>contact</span></a></li>
      <!-- <li v-for="gnbMenu in list" :key="gnbMenu">
        <a :href="gnbMenu.href"><span>{{gnbMenu.title}}</span></a>
      </li> -->
    </ul>
  </div>
</template>

<script>
const reqUrl = window.location.pathname;
// const gnbData = [
// 	{class : 'serviceOn', href : 'commerce.html', title : 'service'},
// 	{class : 'workOn', href : 'works_2021_01.html', title : 'work'},
// 	{class : 'contactOn', href : 'intro.html', title : 'contact'}
// ];
module.exports = {
  data() {
    return {
      // list : gnbData,
      gnbModal : false,
      lnbOn : reqUrl.includes('/service') || reqUrl.includes('/contact') || reqUrl.includes('_vue'),
      serviceOn: reqUrl.includes('/service'),
      worksOn: reqUrl.includes('/works'),
      contactOn: reqUrl.includes('/contact')
    }
  },
  created: function() {
    eventBus.$on('clickGnb', function(){
      const lineX = document.querySelector('.gnb_btn');
      const body = document.body;
      const header = document.querySelector('header');
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
  },
}
</script>
